import React, { useState } from 'react';

export const OneActionEffectsDiagram: React.FC = () => {
  const effects = [
    {
      num: '1',
      title: 'Arrival Timestamp Recorded',
      desc: 'Immutable clock time logged with gate clerk ID; establishes legal check-in time.',
      domain: 'Gate Audit'
    },
    {
      num: '2',
      title: 'Active Queue Entry',
      desc: 'Token enters live waiting sequence on a deterministic First-Checked-In, First-Served basis.',
      domain: 'Yard Management'
    },
    {
      num: '3',
      title: 'Farmer SMS Notification',
      desc: 'Automated SMS sent: “Arrival Confirmed — You are #14 in the queue. Est. wait: 30-50 mins.”',
      domain: 'Citizen Communication'
    },
    {
      num: '4',
      title: 'Supervising Officer Dashboard',
      desc: 'Centre intake counter increments; live queue depth updates on district command view.',
      domain: 'Executive Oversight'
    },
    {
      num: '5',
      title: 'Cryptographic Audit Event',
      desc: 'Signed event payload appended to immutable database audit log with zero data tampering.',
      domain: 'Compliance'
    }
  ];

  const [activeEffect, setActiveEffect] = useState(effects[0]);

  return (
    <div className="interactive-diagram-container">
      <div className="diagram-header">
        <div className="diagram-title">
          <span>⚡</span>
          <span>One Action → Multiple Digital Effects</span>
        </div>
        <div className="diagram-interactive-hint">
          <span>👆 Click effects to trace downstream outcomes</span>
        </div>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1.25rem', padding: '1rem 0' }}>
        {/* The Single Action */}
        <div style={{
          background: 'linear-gradient(135deg, rgba(16, 185, 129, 0.2) 0%, rgba(56, 189, 248, 0.2) 100%)',
          border: '2px solid var(--accent-emerald)',
          borderRadius: '10px',
          padding: '1rem 2rem',
          textAlign: 'center',
          boxShadow: 'var(--shadow-glow)'
        }}>
          <div style={{ fontSize: '0.72rem', color: 'var(--accent-emerald-light)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em' }}>
            Single Operator Action
          </div>
          <div style={{ fontFamily: 'var(--font-mono)', fontSize: '1.2rem', fontWeight: 800, color: '#f8fafc', marginTop: '0.2rem' }}>
            SCAN / ENTER TOKEN [ HF-DEMO-024 ]
          </div>
        </div>

        <div style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>
          ▼ Triggers 5 Automated Digital Effects (Zero Duplicate Typing) ▼
        </div>

        {/* The 5 Effects */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '0.75rem', width: '100%' }}>
          {effects.map((eff) => (
            <div
              key={eff.num}
              className={`core-loop-node ${activeEffect.num === eff.num ? 'active' : ''}`}
              onClick={() => setActiveEffect(eff)}
              role="button"
              tabIndex={0}
              style={{ flexDirection: 'column', alignItems: 'flex-start', padding: '0.85rem' }}
            >
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%', marginBottom: '0.3rem' }}>
                <span style={{ fontFamily: 'var(--font-mono)', color: 'var(--accent-emerald-light)', fontSize: '0.8rem', fontWeight: 800 }}>
                  EFFECT #{eff.num}
                </span>
                <span style={{ fontSize: '0.65rem', color: 'var(--text-muted)' }}>{eff.domain}</span>
              </div>
              <div style={{ fontSize: '0.88rem', fontWeight: 600, color: 'var(--text-primary)' }}>{eff.title}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="journey-detail-box" style={{ marginTop: '0.5rem' }}>
        <h4 style={{ margin: 0, color: 'var(--accent-emerald-light)', fontFamily: 'var(--font-display)', fontSize: '1.05rem', marginBottom: '0.4rem' }}>
          Effect #{activeEffect.num}: {activeEffect.title}
        </h4>
        <p style={{ color: '#cbd5e1', fontSize: '0.9rem', margin: 0 }}>
          {activeEffect.desc}
        </p>
      </div>
    </div>
  );
};

export const QualityBranchDiagram: React.FC = () => {
  const [selectedBranch, setSelectedBranch] = useState<'ACCEPTED' | 'REJECTED' | 'DISPUTE'>('ACCEPTED');

  return (
    <div className="interactive-diagram-container">
      <div className="diagram-header">
        <div className="diagram-title">
          <span>🌾</span>
          <span>Quality Inspection as an Operational Branch (Not an Error)</span>
        </div>
        <div className="diagram-interactive-hint">
          <span>👆 Click branches to view documented pathways</span>
        </div>
      </div>

      <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap', padding: '1rem 0' }}>
        <button
          onClick={() => setSelectedBranch('ACCEPTED')}
          className={`core-loop-node ${selectedBranch === 'ACCEPTED' ? 'active' : ''}`}
          style={{ borderColor: selectedBranch === 'ACCEPTED' ? 'var(--accent-emerald)' : 'var(--border-medium)' }}
        >
          <span>✅ ACCEPTED (Standard MSP Intake)</span>
        </button>

        <button
          onClick={() => setSelectedBranch('REJECTED')}
          className={`core-loop-node ${selectedBranch === 'REJECTED' ? 'active' : ''}`}
          style={{ borderColor: selectedBranch === 'REJECTED' ? 'var(--accent-rose)' : 'var(--border-medium)' }}
        >
          <span>❌ REJECTED (Documented Reasons)</span>
        </button>

        <button
          onClick={() => setSelectedBranch('DISPUTE')}
          className={`core-loop-node ${selectedBranch === 'DISPUTE' ? 'active' : ''}`}
          style={{ borderColor: selectedBranch === 'DISPUTE' ? 'var(--accent-amber)' : 'var(--border-medium)' }}
        >
          <span>⚖️ RETEST / DISPUTE / DRYING</span>
        </button>
      </div>

      <div className="journey-detail-box">
        {selectedBranch === 'ACCEPTED' && (
          <div>
            <h4 style={{ color: 'var(--accent-emerald-light)', margin: '0 0 0.5rem' }}>Branch: Quality Accepted</h4>
            <p style={{ color: '#cbd5e1', fontSize: '0.9rem', marginBottom: '0.5rem' }}>
              Crop sample satisfies statutory Fair Average Quality (FAQ) standards (e.g. moisture &le; 17%, foreign matter &le; 2%).
            </p>
            <div style={{ background: 'var(--bg-tertiary)', padding: '0.75rem', borderRadius: '6px' }}>
              <strong style={{ color: 'var(--text-primary)' }}>Next Operational Action:</strong> Vehicle moves directly to gross weighbridge. Net weight calculated and digital purchase bill prepared.
            </div>
          </div>
        )}

        {selectedBranch === 'REJECTED' && (
          <div>
            <h4 style={{ color: 'var(--accent-rose)', margin: '0 0 0.5rem' }}>Branch: Quality Rejected (Documented Reasons)</h4>
            <p style={{ color: '#cbd5e1', fontSize: '0.9rem', marginBottom: '0.5rem' }}>
              Crop fails statutory parameters. Grader must log the specific statutory failure code:
            </p>
            <ul style={{ color: '#cbd5e1', fontSize: '0.88rem', margin: '0 0 0.75rem 1.5rem' }}>
              <li><strong>Moisture Content Exceeded:</strong> e.g. 19.4% (Statutory ceiling: 17.0%).</li>
              <li><strong>Refraction / Foreign Matter:</strong> Exceeds permissible inorganic dust/chaff.</li>
              <li><strong>Damaged / Discolored Grains:</strong> Beyond permissible tolerance percentage.</li>
            </ul>
            <div style={{ background: 'var(--bg-tertiary)', padding: '0.75rem', borderRadius: '6px' }}>
              <strong style={{ color: 'var(--text-primary)' }}>Transparency Guarantee:</strong> Grader ID, timestamp, and certified moisture meter reading logged. Farmer receives SMS receipt; verbal unrecorded turnaways are prohibited.
            </div>
          </div>
        )}

        {selectedBranch === 'DISPUTE' && (
          <div>
            <h4 style={{ color: 'var(--accent-amber)', margin: '0 0 0.5rem' }}>Branch: Permitted Post-Rejection Avenues</h4>
            <p style={{ color: '#cbd5e1', fontSize: '0.9rem', marginBottom: '0.5rem' }}>
              If permitted under the state procurement SOP, the farmer may elect one of three formal corrective paths:
            </p>
            <ol style={{ color: '#cbd5e1', fontSize: '0.88rem', margin: '0 0 0.75rem 1.5rem' }}>
              <li><strong>Mandi Drying / Winnowing:</strong> Farmer uses the centre drying yard for 24–48 hours to reduce moisture to &le; 17% and requests a retest.</li>
              <li><strong>Formal Retest Request:</strong> A second joint sample drawn with the supervising Mandi Secretary.</li>
              <li><strong>District Appellate Inspection:</strong> Formal escalation to the District Quality Control Officer.</li>
            </ol>
          </div>
        )}
      </div>
    </div>
  );
};

export const PaymentLifecycleDiagram: React.FC = () => {
  const [selectedMilestone, setSelectedMilestone] = useState<number>(0);

  const milestones = [
    {
      step: 1,
      title: 'PURCHASE RECORDED',
      badge: 'Mandi Receipt',
      system: 'Authoritative Procurement System (e-Uparjan / OPMS)',
      desc: 'Gross weighment minus tare weight recorded. Certified net weight and statutory MSP purchase bill generated.',
      farmerView: 'Verified Mandi Receipt #UP-9021 issued. Quantity: 49.80 quintals. Gross Payout: ₹1,14,540.'
    },
    {
      step: 2,
      title: 'PAYMENT SUBMITTED',
      badge: 'Treasury / PFMS',
      system: 'State Finance Department / Treasury Gateway',
      desc: 'Purchase bill approved by Mandi Secretary and submitted to Treasury/PFMS for direct bank account disbursement.',
      farmerView: 'Status: Payment Submitted to Treasury. Sanction Order #TS-4091. Verification in progress.'
    },
    {
      step: 3,
      title: 'CREDIT CONFIRMED',
      badge: 'Bank / RBI e-Kuber',
      system: 'Authoritative Bank / Core Banking System',
      desc: 'Authoritative credit advice received from bank partner. Electronic funds transfer completed.',
      farmerView: 'Status: Payment Credited! ₹1,14,540 credited into Bank of Baroda A/c **4821 on 28-Sep. UTR #RBIP902188.'
    }
  ];

  return (
    <div className="interactive-diagram-container">
      <div className="diagram-header">
        <div className="diagram-title">
          <span>💳</span>
          <span>Verified Payment Visibility Lifecycle</span>
        </div>
        <div className="diagram-interactive-hint">
          <span>👆 Click milestone to inspect verified stages</span>
        </div>
      </div>

      <div className="demo-watermark-banner">
        <span>⚠️ HARVESTFLOW PROVIDES VISIBILITY ONLY — DOES NOT EXECUTE PAYMENTS</span>
        <span>STATIC DEMO DATA</span>
      </div>

      <div style={{ display: 'flex', gap: '0.75rem', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', padding: '1rem 0' }}>
        {milestones.map((m, idx) => (
          <React.Fragment key={m.step}>
            <div
              className={`core-loop-node ${selectedMilestone === idx ? 'active' : ''}`}
              onClick={() => setSelectedMilestone(idx)}
              role="button"
              tabIndex={0}
              style={{ flex: 1, minWidth: '180px', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}
            >
              <span style={{ fontSize: '0.7rem', color: 'var(--accent-blue)', fontFamily: 'var(--font-mono)' }}>MILESTONE {m.step}</span>
              <span style={{ fontSize: '0.9rem', fontWeight: 700 }}>{m.title}</span>
              <span style={{ fontSize: '0.7rem', color: 'var(--text-muted)' }}>{m.badge}</span>
            </div>
            {idx < milestones.length - 1 && <span style={{ color: 'var(--text-muted)', fontWeight: 900 }}>→</span>}
          </React.Fragment>
        ))}
      </div>

      <div className="journey-detail-box">
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
          <h4 style={{ margin: 0, color: 'var(--accent-emerald-light)', fontFamily: 'var(--font-display)', fontSize: '1.05rem' }}>
            Milestone {milestones[selectedMilestone].step}: {milestones[selectedMilestone].title}
          </h4>
          <span className="project-tag">{milestones[selectedMilestone].badge}</span>
        </div>

        <p style={{ color: '#cbd5e1', fontSize: '0.9rem', marginBottom: '0.75rem' }}>
          {milestones[selectedMilestone].desc}
        </p>

        <div style={{ background: 'var(--bg-tertiary)', padding: '0.85rem', borderRadius: '6px', borderLeft: '3px solid var(--accent-emerald)' }}>
          <div style={{ fontSize: '0.72rem', color: 'var(--accent-emerald-light)', fontWeight: 700, textTransform: 'uppercase' }}>
            Farmer Screen / SMS Display
          </div>
          <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.85rem', color: '#f8fafc', marginTop: '0.25rem' }}>
            {milestones[selectedMilestone].farmerView}
          </div>
        </div>
      </div>
    </div>
  );
};
