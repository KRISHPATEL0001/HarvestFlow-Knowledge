import React, { useState } from 'react';

interface DomainAuthority {
  domain: string;
  authority: string;
  category: 'Government' | 'HarvestFlow' | 'Banking / Statutory';
  harvestFlowRole: string;
  conflictRule: string;
}

const DOMAIN_AUTHORITIES: DomainAuthority[] = [
  {
    domain: 'Farmer Registration & Land Records',
    authority: 'Existing Authorized Government System (e-Uparjan, Agristack, C-Registry)',
    category: 'Government',
    harvestFlowRole: 'Read-only consumer via API; validates farmer eligibility before slot booking.',
    conflictRule: 'Government database is statutory authority; HarvestFlow never alters farmer registration.'
  },
  {
    domain: 'Procurement Eligibility & Quotas',
    authority: 'State Civil Supplies Department / Statutory Rules',
    category: 'Government',
    harvestFlowRole: 'Enforces statutory maximum quintal quota per farmer during booking.',
    conflictRule: 'State policy takes precedence; HarvestFlow cannot override statutory ceilings.'
  },
  {
    domain: 'Procurement Policy & MSP Rates',
    authority: 'Department of Consumer Affairs (DoCA) / State Cabinet',
    category: 'Government',
    harvestFlowRole: 'Displays official MSP rates and procurement window dates.',
    conflictRule: 'Statutory gazette notification is sole legal source.'
  },
  {
    domain: 'Slot Availability & Booking',
    authority: 'HarvestFlow Coordination Engine',
    category: 'HarvestFlow',
    harvestFlowRole: 'Authoritative owner of appointment schedules and capacity allocations.',
    conflictRule: 'HarvestFlow database is authoritative for visit reservations.'
  },
  {
    domain: 'Farmer Gate Check-in Event',
    authority: 'HarvestFlow Operational Layer (Centre Gate)',
    category: 'HarvestFlow',
    harvestFlowRole: 'Authoritative owner of physical gate arrival timestamps and token validations.',
    conflictRule: 'Gate check-in log is immutable operational record.'
  },
  {
    domain: 'Live Yard Queue Sequencing',
    authority: 'HarvestFlow Operational Layer',
    category: 'HarvestFlow',
    harvestFlowRole: 'Authoritative owner of active waiting sequence and weighbridge calling.',
    conflictRule: 'First-checked-in, first-served state machine governs sequence.'
  },
  {
    domain: 'Capacity Signals & Adjustments',
    authority: 'Authorized Centre Operator / Supervising Officer',
    category: 'HarvestFlow',
    harvestFlowRole: 'Authoritative manager of baseline quotas and operational disruptions.',
    conflictRule: 'Manual changes require Actor + Timestamp + Reason code in audit log.'
  },
  {
    domain: 'Crop Quality Grading Result',
    authority: 'Authorized Mandi Quality Inspector / Grader',
    category: 'Government',
    harvestFlowRole: 'Surfaces result (Accepted/Rejected) and permitted dispute/retest paths.',
    conflictRule: 'Certified grader signoff in state portal is legal truth; HarvestFlow captures reason code.'
  },
  {
    domain: 'Accepted Net Weighment',
    authority: 'Authoritative Procurement System (Certified Weighbridge)',
    category: 'Government',
    harvestFlowRole: 'Reads certified weighment for audit logging and receipt issuance.',
    conflictRule: 'Stamping-verified weighbridge receipt is statutory financial truth.'
  },
  {
    domain: 'Official Purchase Bill / Record',
    authority: 'Existing Government Procurement ERP (OPMS, e-Uparjan)',
    category: 'Government',
    harvestFlowRole: 'Surfaces transaction ID and receipt reference to farmer via SMS/web.',
    conflictRule: 'State ERP transaction number is authoritative.'
  },
  {
    domain: 'Payment Disbursement Order',
    authority: 'Authorized Government Treasury / PFMS',
    category: 'Government',
    harvestFlowRole: 'Tracks submission status and payment sanction milestone.',
    conflictRule: 'Treasury voucher number is authoritative.'
  },
  {
    domain: 'Bank Credit Confirmation',
    authority: 'Authoritative Bank / RBI e-Kuber / PFMS Record',
    category: 'Banking / Statutory',
    harvestFlowRole: 'Surfaces verified credit confirmation to farmer; never touches banking rails.',
    conflictRule: 'Bank UTR / credit confirmation is sole proof of payment.'
  },
  {
    domain: 'Notification Delivery Records',
    authority: 'HarvestFlow Notification Service / Telecom Gateway',
    category: 'HarvestFlow',
    harvestFlowRole: 'Authoritative owner of SMS dispatch timestamps and delivery receipts.',
    conflictRule: 'Telecom gateway delivery reports govern notification audit.'
  },
  {
    domain: 'Operational Coordination Audit',
    authority: 'HarvestFlow Immutable Audit Log',
    category: 'HarvestFlow',
    harvestFlowRole: 'Cryptographically logs all manual adjustments, overrides, and cancellations.',
    conflictRule: 'Append-only database log serves as forensic audit record.'
  }
];

export const SourceOfTruthTable: React.FC = () => {
  const [filter, setFilter] = useState<'ALL' | 'Government' | 'HarvestFlow' | 'Banking / Statutory'>('ALL');
  const [search, setSearch] = useState('');

  const filtered = DOMAIN_AUTHORITIES.filter((item) => {
    const matchesFilter = filter === 'ALL' || item.category === filter;
    const matchesSearch = item.domain.toLowerCase().includes(search.toLowerCase()) ||
                          item.authority.toLowerCase().includes(search.toLowerCase()) ||
                          item.harvestFlowRole.toLowerCase().includes(search.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  return (
    <div className="interactive-diagram-container">
      <div className="diagram-header">
        <div className="diagram-title">
          <span>⚖️</span>
          <span>Interactive Source of Truth & Authority Matrix</span>
        </div>
        <div className="diagram-interactive-hint">
          <span>🔍 Filter by authority category</span>
        </div>
      </div>

      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1rem' }}>
        <div style={{ display: 'flex', gap: '0.4rem', flexWrap: 'wrap' }}>
          {(['ALL', 'Government', 'HarvestFlow', 'Banking / Statutory'] as const).map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className="project-tag"
              style={{
                cursor: 'pointer',
                background: filter === cat ? 'var(--accent-emerald)' : 'var(--bg-tertiary)',
                color: filter === cat ? '#0f172a' : 'var(--text-secondary)',
                border: '1px solid var(--border-medium)',
                fontWeight: 600
              }}
            >
              {cat}
            </button>
          ))}
        </div>

        <input
          type="text"
          placeholder="Filter data domains..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          style={{
            background: 'var(--bg-tertiary)',
            border: '1px solid var(--border-medium)',
            color: 'var(--text-primary)',
            padding: '0.35rem 0.75rem',
            borderRadius: '6px',
            fontSize: '0.85rem'
          }}
        />
      </div>

      <div className="table-container" style={{ maxHeight: '420px', overflowY: 'auto' }}>
        <table className="styled-table">
          <thead>
            <tr>
              <th>Information Domain</th>
              <th>Authoritative System</th>
              <th>HarvestFlow Coordination Role</th>
              <th>Conflict Resolution Rule</th>
            </tr>
          </thead>
          <tbody>
            {filtered.map((item, idx) => (
              <tr key={idx}>
                <td style={{ fontWeight: 600, color: 'var(--text-primary)' }}>{item.domain}</td>
                <td>
                  <span style={{
                    display: 'inline-block',
                    padding: '0.15rem 0.5rem',
                    borderRadius: '4px',
                    fontSize: '0.75rem',
                    fontWeight: 600,
                    background: item.category === 'Government' ? 'var(--accent-blue-dim)' :
                                item.category === 'HarvestFlow' ? 'var(--accent-emerald-dim)' : 'var(--accent-purple-dim)',
                    color: item.category === 'Government' ? 'var(--accent-blue)' :
                           item.category === 'HarvestFlow' ? 'var(--accent-emerald-light)' : 'var(--accent-purple)'
                  }}>
                    {item.authority}
                  </span>
                </td>
                <td style={{ fontSize: '0.85rem' }}>{item.harvestFlowRole}</td>
                <td style={{ fontSize: '0.82rem', color: 'var(--text-muted)' }}>{item.conflictRule}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export const FarmerJourneyStepper: React.FC = () => {
  const steps = [
    {
      num: '01',
      title: 'Registration Lookup',
      farmerAction: 'Enters official Farmer ID (e.g. UP-9021) on SMS, Web, or CSC kiosk.',
      systemResponse: 'Queries government roster; confirms approved status, land quota (80 q), and crop (Paddy Common).',
      smsPreview: 'HarvestFlow: Verified Farmer Ramesh Kumar. Approved quota: 80 q Paddy Common. Select your procurement centre.'
    },
    {
      num: '02',
      title: 'Centre Selection',
      farmerAction: 'Chooses nearest mapped centre: Demo Centre 104 (Suryapet Mandi).',
      systemResponse: 'Displays centre status: OPEN; today’s intake health: NORMAL; operating hours: 9 AM - 5 PM.',
      smsPreview: 'Selected: Demo Centre 104. Available booking windows: Thursday 10-12 PM, Friday 2-4 PM.'
    },
    {
      num: '03',
      title: 'Slot Booking',
      farmerAction: 'Selects 50 quintals delivery for Thursday, 10:00 AM – 12:00 PM.',
      systemResponse: 'Verifies remaining usable capacity (300q available); locks slot quota to prevent overbooking.',
      smsPreview: 'Booking Confirmed! Slot: Thursday 24-Sep, 10 AM - 12 PM at Centre 104. Quantity: 50 q.'
    },
    {
      num: '04',
      title: 'Token Issuance',
      farmerAction: 'Receives universal Token reference code.',
      systemResponse: 'Generates universal Token: HF-DEMO-024. Available via SMS, printable paper slip, or QR view.',
      smsPreview: 'Your Token: HF-DEMO-024. Present this code at gate upon arrival. Helpline: 1800-180-1551.'
    },
    {
      num: '05',
      title: 'Arrival at Gate',
      farmerAction: 'Transports crop in tractor-trolley during scheduled arrival window.',
      systemResponse: 'If a disruption occurred earlier, farmer already received an advance SMS reschedule alert.',
      smsPreview: 'Reminder: Your slot at Centre 104 is today at 10 AM. Centre operating normally.'
    },
    {
      num: '06',
      title: 'Farmer Check-in',
      farmerAction: 'Presents Token HF-DEMO-024 to gate clerk.',
      systemResponse: 'Clerk enters token; status changes from BOOKED to CHECKED_IN. Arrival timestamp logged.',
      smsPreview: 'Check-in Confirmed at 10:18 AM! You are #14 in the active queue. Estimated wait: 30-50 mins.'
    },
    {
      num: '07',
      title: 'Queue Progression',
      farmerAction: 'Waits in tractor staging yard or shaded rest area.',
      systemResponse: 'Queue moves deterministically. When 2 vehicles remain ahead, automated SMS turn alert fires.',
      smsPreview: 'Turn Approaching! Only 2 vehicles ahead of HF-DEMO-024. Please move to Weighbridge 2.'
    },
    {
      num: '08',
      title: 'Procurement Intake',
      farmerAction: 'Vehicle moves to weighbridge. Quality inspected and crop weighed.',
      systemResponse: 'Operator logs weighment in state portal. Status moves to PROCESSING, then COMPLETED.',
      smsPreview: 'Procurement Complete! Net Weight: 49.80 q. Gross: ₹1,14,540. Receipt #UP-9021 issued.'
    },
    {
      num: '09',
      title: 'Payment Tracking',
      farmerAction: 'Tracks payment disbursement stages from home.',
      systemResponse: 'HarvestFlow reads treasury status feed: Submitted → Processing → Credited.',
      smsPreview: 'Payment Submitted: Bill #UP-9021 sent to State Treasury for direct bank credit.'
    },
    {
      num: '10',
      title: 'Bank Credit Confirmed',
      farmerAction: 'Payment clears into farmer’s bank account.',
      systemResponse: 'Authoritative bank credit advice received. Final completion SMS sent.',
      smsPreview: 'Payment Credited! ₹1,14,540 credited to Bank of Baroda A/c **4821 on 28-Sep. UTR #RBIP902188.'
    }
  ];

  const [currentStep, setCurrentStep] = useState(0);

  return (
    <div className="interactive-diagram-container">
      <div className="diagram-header">
        <div className="diagram-title">
          <span>🚶</span>
          <span>The Farmer 10-Stage Journey: Interactive Walkthrough</span>
        </div>
        <div className="diagram-interactive-hint">
          <span>👆 Click steps to view SMS alerts and system responses</span>
        </div>
      </div>

      <div className="demo-watermark-banner">
        <span>⚠️ ILLUSTRATIVE FARMER JOURNEY — SIMULATED DATA</span>
        <span>DEMO ONLY</span>
      </div>

      <div style={{ display: 'flex', gap: '0.4rem', overflowX: 'auto', paddingBottom: '0.75rem' }}>
        {steps.map((st, idx) => (
          <button
            key={st.num}
            onClick={() => setCurrentStep(idx)}
            className={`journey-step-card ${currentStep === idx ? 'active' : ''}`}
            style={{ minWidth: '85px', padding: '0.6rem 0.4rem', border: '1px solid var(--border-medium)' }}
          >
            <span className="journey-step-num">{st.num}</span>
            <span style={{ fontSize: '0.75rem', fontWeight: 600, color: 'var(--text-primary)' }}>{st.title}</span>
          </button>
        ))}
      </div>

      <div className="journey-detail-box" style={{ marginTop: '0.75rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.75rem' }}>
          <h4 style={{ margin: 0, color: 'var(--accent-emerald-light)', fontFamily: 'var(--font-display)', fontSize: '1.1rem' }}>
            Stage {steps[currentStep].num}: {steps[currentStep].title}
          </h4>
          <span className="project-tag">Farmer Lifecycle</span>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 260px), 1fr))', gap: '0.85rem' }}>
          <div style={{ background: 'var(--bg-tertiary)', padding: '0.85rem', borderRadius: '6px' }}>
            <div style={{ fontSize: '0.72rem', color: 'var(--accent-blue)', fontWeight: 700, textTransform: 'uppercase' }}>Farmer Action</div>
            <div style={{ fontSize: '0.88rem', color: '#e2e8f0', marginTop: '0.25rem' }}>{steps[currentStep].farmerAction}</div>
          </div>

          <div style={{ background: 'var(--bg-tertiary)', padding: '0.85rem', borderRadius: '6px' }}>
            <div style={{ fontSize: '0.72rem', color: 'var(--accent-emerald-light)', fontWeight: 700, textTransform: 'uppercase' }}>System Response</div>
            <div style={{ fontSize: '0.88rem', color: '#e2e8f0', marginTop: '0.25rem' }}>{steps[currentStep].systemResponse}</div>
          </div>
        </div>

        <div style={{
          marginTop: '0.85rem',
          background: '#020617',
          border: '1px dashed var(--accent-emerald)',
          borderRadius: '8px',
          padding: '0.85rem 1.25rem',
          display: 'flex',
          alignItems: 'center',
          gap: '1rem'
        }}>
          <span style={{ fontSize: '1.5rem' }}>💬</span>
          <div>
            <div style={{ fontSize: '0.72rem', color: 'var(--accent-emerald-light)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em' }}>
              Simulated SMS Message Received by Farmer
            </div>
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.85rem', color: '#f8fafc', marginTop: '0.2rem' }}>
              {steps[currentStep].smsPreview}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
