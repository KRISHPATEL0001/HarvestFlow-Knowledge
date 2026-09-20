import React, { useState } from 'react';

interface ComponentInfo {
  id: string;
  name: string;
  category: 'Government System' | 'HarvestFlow Core' | 'User Interface' | 'External Network';
  description: string;
  dataExchanged: string;
  authority: string;
}

const COMPONENTS: ComponentInfo[] = [
  {
    id: 'gov-systems',
    name: 'Existing Government Systems (e-Uparjan, OPMS, CFPP)',
    category: 'Government System',
    description: 'State and central authoritative software systems managing land verification, MSP purchase bills, and direct bank transfers.',
    dataExchanged: 'Approved farmer records, land quotas, official MSP rates, certified weighment receipts, and treasury payment status.',
    authority: 'State Food & Civil Supplies Corporation / NIC'
  },
  {
    id: 'api-gateway',
    name: 'Approved Integration Layer / API Setu',
    category: 'Government System',
    description: 'Secure, token-based REST API gateway (or authorized batch file exchange). No direct SQL database access.',
    dataExchanged: 'JSON REST payloads with OAuth2/JWT authentication.',
    authority: 'MeitY / NIC / State IT Department'
  },
  {
    id: 'booking-capacity',
    name: 'Booking & Capacity Engine',
    category: 'HarvestFlow Core',
    description: 'Computes usable intake capacity (Baseline + Adjustment) and manages appointment slot reservations with ACID concurrent-booking protection.',
    dataExchanged: 'Slot availability, quota locks, token generation.',
    authority: 'HarvestFlow Coordination Engine'
  },
  {
    id: 'checkin-queue',
    name: 'Check-in & Operational Queue Engine',
    category: 'HarvestFlow Core',
    description: 'Manages physical gate check-in, arrival timestamps, and the deterministic First-Checked-In, First-Served queue state machine.',
    dataExchanged: 'Token verification, queue position, stage transitions (Waiting, Processing, Completed).',
    authority: 'HarvestFlow Operational Layer'
  },
  {
    id: 'disruption-engine',
    name: 'Disruption Handling & Exception Engine',
    category: 'HarvestFlow Core',
    description: 'Detects equipment breakdowns, rain interruptions, or stale centres. Triggers capacity throttling, automated reschedule cascades, and officer alerts.',
    dataExchanged: 'Disruption reason codes, capacity reductions, affected booking rosters.',
    authority: 'Centre Operator / Supervising Officer'
  },
  {
    id: 'notification-service',
    name: 'Event-Driven Notification Service',
    category: 'HarvestFlow Core',
    description: 'Dispatches targeted SMS alerts and optional app notifications triggered by operational state changes.',
    dataExchanged: 'Booking confirmations, disruption warnings, turn alerts, payment milestones.',
    authority: 'HarvestFlow Notification Gateway'
  },
  {
    id: 'farmer-ui',
    name: 'Farmer Channels (SMS & Web App)',
    category: 'User Interface',
    description: 'Basic 2G SMS for 100% of farmers; optional bilingual responsive web app for smartphone users; assisted access via Gram Panchayat / CSC kiosks.',
    dataExchanged: 'Registration lookup, slot booking, universal token, queue position query.',
    authority: 'Farmer / CSC Operator'
  },
  {
    id: 'operator-ui',
    name: 'Centre Operator Terminal',
    category: 'User Interface',
    description: 'Streamlined, single-action interface for gate check-in, operational stage updates, capacity adjustments, and disruption declarations.',
    dataExchanged: 'Token check-in, disruption declarations, capacity adjustments.',
    authority: 'Mandi Clerk / Society Secretary'
  },
  {
    id: 'officer-ui',
    name: 'Supervising Officer Command Dashboard',
    category: 'User Interface',
    description: 'District-wide visibility over centre throughput, stale-status flags, capacity overloads, active disruptions, and complete immutable audit logs.',
    dataExchanged: 'District aggregate metrics, exception overrides, audit logs.',
    authority: 'District Procurement Officer / Collectorate'
  }
];

export const ArchitectureDiagram: React.FC = () => {
  const [selectedComp, setSelectedComp] = useState<ComponentInfo>(COMPONENTS[0]);

  return (
    <div className="interactive-diagram-container">
      <div className="diagram-header">
        <div className="diagram-title">
          <span>🏛️</span>
          <span>Logical System Architecture: The Coordination Layer</span>
        </div>
        <div className="diagram-interactive-hint">
          <span>👆 Click any component box to inspect architecture specs</span>
        </div>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', alignItems: 'center', padding: '1rem 0' }}>
        {/* Top Tier: Government Systems */}
        <div
          className={`core-loop-node ${selectedComp.id === 'gov-systems' ? 'active' : ''}`}
          style={{ width: '100%', maxWidth: '650px', justifyContent: 'center', background: 'rgba(56, 189, 248, 0.1)', borderColor: 'var(--accent-blue)' }}
          onClick={() => setSelectedComp(COMPONENTS[0])}
          role="button"
          tabIndex={0}
        >
          <span>🏛️ Existing Government Systems (e-Uparjan, OPMS, CFPP, PFMS)</span>
        </div>

        <div style={{ color: 'var(--text-muted)', fontSize: '0.8rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <span>▲▼ Approved Integration Layer / API Setu (OAuth2 / REST API)</span>
        </div>

        {/* Middle Tier: HarvestFlow Core Container */}
        <div style={{
          width: '100%',
          maxWidth: '750px',
          border: '2px dashed var(--accent-emerald)',
          borderRadius: '12px',
          padding: '1.25rem',
          background: 'rgba(16, 185, 129, 0.04)'
        }}>
          <div style={{ textAlign: 'center', marginBottom: '1rem', color: 'var(--accent-emerald-light)', fontWeight: 700, fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
            HarvestFlow Coordination Layer (No DB/ERP Replacement)
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '0.75rem' }}>
            <div
              className={`core-loop-node ${selectedComp.id === 'booking-capacity' ? 'active' : ''}`}
              onClick={() => setSelectedComp(COMPONENTS[2])}
              role="button"
              tabIndex={0}
            >
              <span>📅 Booking & Capacity</span>
            </div>

            <div
              className={`core-loop-node ${selectedComp.id === 'checkin-queue' ? 'active' : ''}`}
              onClick={() => setSelectedComp(COMPONENTS[3])}
              role="button"
              tabIndex={0}
            >
              <span>🚪 Check-in & Queue</span>
            </div>

            <div
              className={`core-loop-node ${selectedComp.id === 'disruption-engine' ? 'active' : ''}`}
              onClick={() => setSelectedComp(COMPONENTS[4])}
              role="button"
              tabIndex={0}
            >
              <span>⚡ Disruption & Exceptions</span>
            </div>

            <div
              className={`core-loop-node ${selectedComp.id === 'notification-service' ? 'active' : ''}`}
              onClick={() => setSelectedComp(COMPONENTS[5])}
              role="button"
              tabIndex={0}
            >
              <span>📲 Notification Service</span>
            </div>
          </div>
        </div>

        <div style={{ color: 'var(--text-muted)', fontSize: '0.8rem' }}>▼ Multi-Channel Actor Access ▼</div>

        {/* Bottom Tier: Actors */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '0.75rem', width: '100%', maxWidth: '750px' }}>
          <div
            className={`core-loop-node ${selectedComp.id === 'farmer-ui' ? 'active' : ''}`}
            onClick={() => setSelectedComp(COMPONENTS[6])}
            role="button"
            tabIndex={0}
            style={{ justifyContent: 'center' }}
          >
            <span>🌾 Farmer (SMS / Web)</span>
          </div>

          <div
            className={`core-loop-node ${selectedComp.id === 'operator-ui' ? 'active' : ''}`}
            onClick={() => setSelectedComp(COMPONENTS[7])}
            role="button"
            tabIndex={0}
            style={{ justifyContent: 'center' }}
          >
            <span>💻 Centre Operator</span>
          </div>

          <div
            className={`core-loop-node ${selectedComp.id === 'officer-ui' ? 'active' : ''}`}
            onClick={() => setSelectedComp(COMPONENTS[8])}
            role="button"
            tabIndex={0}
            style={{ justifyContent: 'center' }}
          >
            <span>🛡️ Supervising Officer</span>
          </div>
        </div>
      </div>

      <div className="journey-detail-box">
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
          <h4 style={{ margin: 0, color: 'var(--text-primary)', fontFamily: 'var(--font-display)', fontSize: '1.05rem' }}>
            {selectedComp.name}
          </h4>
          <span className="project-tag" style={{ fontSize: '0.65rem' }}>{selectedComp.category}</span>
        </div>

        <p style={{ color: '#cbd5e1', fontSize: '0.9rem', marginBottom: '0.75rem' }}>
          {selectedComp.description}
        </p>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '0.75rem' }}>
          <div style={{ background: 'var(--bg-tertiary)', padding: '0.75rem', borderRadius: '6px' }}>
            <div style={{ fontSize: '0.7rem', color: 'var(--accent-blue)', fontWeight: 700, textTransform: 'uppercase' }}>Data Exchanged</div>
            <div style={{ fontSize: '0.85rem', color: '#e2e8f0', marginTop: '0.2rem' }}>{selectedComp.dataExchanged}</div>
          </div>
          <div style={{ background: 'var(--bg-tertiary)', padding: '0.75rem', borderRadius: '6px' }}>
            <div style={{ fontSize: '0.7rem', color: 'var(--accent-emerald-light)', fontWeight: 700, textTransform: 'uppercase' }}>Statutory Authority</div>
            <div style={{ fontSize: '0.85rem', color: '#e2e8f0', marginTop: '0.2rem' }}>{selectedComp.authority}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export const QueueStateMachineDiagram: React.FC = () => {
  const states = [
    {
      name: 'BOOKED',
      role: 'Arrival Window Confirmed',
      desc: 'Farmer has a confirmed reservation. They have not yet reached the centre.',
      trigger: 'Farmer successfully completes slot booking based on usable capacity.',
      exitTrigger: 'Farmer physically arrives at gate and presents universal token.'
    },
    {
      name: 'CHECKED_IN',
      role: 'Gate Arrival Logged',
      desc: 'Gate operator scans/enters token. Arrival timestamp is indelibly logged.',
      trigger: 'Gate operator performs Farmer Check-in using Token code.',
      exitTrigger: 'System sequences farmer into live waiting yard line.'
    },
    {
      name: 'WAITING',
      role: 'Active Yard Queue',
      desc: 'Farmer is in the physical queue or rest staging area. Queue position is visible.',
      trigger: 'Check-in confirmed; vehicle admitted into active holding yard.',
      exitTrigger: 'Weighbridge calls vehicle; SMS turn alert sent (“2 vehicles ahead”).'
    },
    {
      name: 'PROCESSING',
      role: 'Weighment & Inspection',
      desc: 'Vehicle is on the weighbridge. Quality inspection and tare/gross weighment underway.',
      trigger: 'Weighbridge operator initiates gross weighment and sampling.',
      exitTrigger: 'Crop offloaded, tare weight logged, and purchase slip recorded.'
    },
    {
      name: 'COMPLETED',
      role: 'Procurement Recorded',
      desc: 'Procurement transaction finalized. Purchase bill sent to state treasury for payment.',
      trigger: 'Operator confirms certified weighment and generates digital receipt.',
      exitTrigger: 'Archived; status moves to Payment Tracking lifecycle.'
    },
    {
      name: 'REJECTED',
      role: 'Quality Exception',
      desc: 'Crop failed statutory standards (moisture > 17%, foreign matter > 2%).',
      trigger: 'Mandi grader logs rejection with mandatory reason code.',
      exitTrigger: 'Farmer receives SMS receipt with permitted retest/drying/dispute options.'
    }
  ];

  const [activeState, setActiveState] = useState(states[0]);

  return (
    <div className="interactive-diagram-container">
      <div className="diagram-header">
        <div className="diagram-title">
          <span>🚦</span>
          <span>Queue State Machine: Deterministic Operational States</span>
        </div>
        <div className="diagram-interactive-hint">
          <span>👆 Click any state bubble to inspect transition logic</span>
        </div>
      </div>

      <div className="queue-states-track">
        {states.map((st) => (
          <div
            key={st.name}
            className={`state-bubble ${activeState.name === st.name ? 'active' : ''}`}
            onClick={() => setActiveState(st)}
            role="button"
            tabIndex={0}
          >
            <div className="state-bubble-name">{st.name}</div>
            <div className="state-bubble-role">{st.role}</div>
          </div>
        ))}
      </div>

      <div className="journey-detail-box">
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
          <h4 style={{ margin: 0, color: 'var(--text-primary)', fontFamily: 'var(--font-mono)', fontSize: '1.1rem' }}>
            STATE: {activeState.name}
          </h4>
          <span className="project-tag" style={{ fontSize: '0.65rem' }}>Deterministic State</span>
        </div>

        <p style={{ color: '#cbd5e1', fontSize: '0.9rem', marginBottom: '0.75rem' }}>
          {activeState.desc}
        </p>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '0.75rem' }}>
          <div style={{ background: 'var(--bg-tertiary)', padding: '0.75rem', borderRadius: '6px', borderLeft: '3px solid var(--accent-blue)' }}>
            <div style={{ fontSize: '0.7rem', color: 'var(--accent-blue)', fontWeight: 700, textTransform: 'uppercase' }}>Entry Trigger</div>
            <div style={{ fontSize: '0.85rem', color: '#e2e8f0', marginTop: '0.2rem' }}>{activeState.trigger}</div>
          </div>
          <div style={{ background: 'var(--bg-tertiary)', padding: '0.75rem', borderRadius: '6px', borderLeft: '3px solid var(--accent-emerald)' }}>
            <div style={{ fontSize: '0.7rem', color: 'var(--accent-emerald-light)', fontWeight: 700, textTransform: 'uppercase' }}>Exit / Transition Trigger</div>
            <div style={{ fontSize: '0.85rem', color: '#e2e8f0', marginTop: '0.2rem' }}>{activeState.exitTrigger}</div>
          </div>
        </div>
      </div>
    </div>
  );
};
