import React, { useState } from 'react';

interface DisruptionStep {
  step: number;
  badge: string;
  title: string;
  systemAction: string;
  farmerExperience: string;
  officerVisibility: string;
}

const DISRUPTION_STEPS: DisruptionStep[] = [
  {
    step: 1,
    badge: 'OPERATOR LOG',
    title: 'Disruption Declared by Centre Operator',
    systemAction: 'Operator selects reason code “Weighbridge Breakdown” and inputs -100q capacity adjustment at 10:15 AM.',
    farmerExperience: 'Farmers currently waiting in yard see physical inspection pause; farmers at home have not yet left.',
    officerVisibility: 'Officer dashboard alerts: “Centre 104 declared operational disruption: Weighbridge 2 offline.”'
  },
  {
    step: 2,
    badge: 'CAPACITY RECALC',
    title: 'Usable Intake Capacity Dynamically Reduced',
    systemAction: 'Formula recalculates: 400q Baseline - 100q Adjustment = 300q Usable Intake. Available slots shrink instantly.',
    farmerExperience: 'New slot booking requests for today are immediately throttled; calendar locks remaining quotas.',
    officerVisibility: 'Centre 104 capacity graph drops from 400q to 300q.'
  },
  {
    step: 3,
    badge: 'SLOT IDENTIFY',
    title: 'Affected Bookings Identified in Chronological Reverse',
    systemAction: 'Algorithm identifies 4 booked farmers totaling 110q scheduled for 1:00 PM – 3:00 PM that exceed new capacity.',
    farmerExperience: 'System isolates exact tokens affected without disturbing earlier morning arrivals.',
    officerVisibility: 'List of 4 affected farmer tokens (HF-DEMO-024, HF-DEMO-025, etc.) generated with contact numbers.'
  },
  {
    step: 4,
    badge: 'SMS CASCADE',
    title: 'Instant Automated SMS Dispatched to Affected Farmers',
    systemAction: 'Automated SMS sent: “Scale issue at Centre 104. Your 1 PM slot is rescheduled. Reply 1 for Friday 10 AM, Reply 2 for Saturday 10 AM.”',
    farmerExperience: 'Farmer receives alert 4 hours in advance at home, avoiding ₹2,500 wasted tractor hiring costs.',
    officerVisibility: 'Notification log records 100% SMS delivery confirmation within 45 seconds.'
  },
  {
    step: 5,
    badge: 'OFFICER AUDIT',
    title: 'Supervising Officer Exception Monitored',
    systemAction: 'Disruption logged in immutable audit trail. If centre remains disrupted past 4 hours, automated escalation triggers.',
    farmerExperience: 'Farmer selects Friday slot via SMS or calls helpline for assisted rescheduling.',
    officerVisibility: 'District Officer contacts mandi secretary to expedite scale repair technician dispatch.'
  },
  {
    step: 6,
    badge: 'RESUMPTION',
    title: 'Centre Resumes & Capacity Restored',
    systemAction: 'Technician replaces scale motor at 1:45 PM. Operator logs “Resume Normal Operation”. Usable capacity restored to 400q.',
    farmerExperience: 'Queue resumes movement; waiting time display updates from STALE to NORMAL.',
    officerVisibility: 'Disruption closed with total duration: 3 hrs 30 mins; all audit logs sealed.'
  }
];

export const DisruptionFlowDiagram: React.FC = () => {
  const [activeStep, setActiveStep] = useState(DISRUPTION_STEPS[0]);

  return (
    <div className="interactive-diagram-container">
      <div className="diagram-header">
        <div className="diagram-title">
          <span>⚡</span>
          <span>Disruption Handling: Weighbridge Breakdown Walkthrough</span>
        </div>
        <div className="diagram-interactive-hint">
          <span>👆 Click any step to inspect the automated alert cascade</span>
        </div>
      </div>

      <div className="demo-watermark-banner">
        <span>⚠️ SIMULATED OPERATIONAL SCENARIO — ILLUSTRATIVE MOCK DATA</span>
        <span>DEMO ONLY</span>
      </div>

      <div className="disruption-flow-steps">
        {DISRUPTION_STEPS.map((s) => (
          <div
            key={s.step}
            className={`disruption-step-item ${activeStep.step === s.step ? 'active' : ''}`}
            onClick={() => setActiveStep(s)}
            role="button"
            tabIndex={0}
          >
            <span className="disruption-step-badge">STEP {s.step}</span>
            <div style={{ flex: 1 }}>
              <div style={{ fontWeight: 600, fontSize: '0.92rem', color: 'var(--text-primary)' }}>{s.title}</div>
              <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>{s.badge}</div>
            </div>
            <span style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>→</span>
          </div>
        ))}
      </div>

      <div className="journey-detail-box" style={{ marginTop: '1.25rem', borderLeft: '3px solid var(--accent-amber)' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
          <h4 style={{ margin: 0, color: 'var(--accent-amber)', fontFamily: 'var(--font-display)', fontSize: '1.05rem' }}>
            Step {activeStep.step}: {activeStep.title}
          </h4>
          <span className="project-tag" style={{ background: 'var(--accent-amber-dim)', color: 'var(--accent-amber)', borderColor: 'rgba(245, 158, 11, 0.4)' }}>
            {activeStep.badge}
          </span>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '0.85rem', marginTop: '0.75rem' }}>
          <div style={{ background: 'var(--bg-tertiary)', padding: '0.85rem', borderRadius: '6px' }}>
            <div style={{ fontSize: '0.72rem', color: 'var(--accent-blue)', fontWeight: 700, textTransform: 'uppercase' }}>System Action</div>
            <div style={{ fontSize: '0.85rem', color: '#e2e8f0', marginTop: '0.25rem' }}>{activeStep.systemAction}</div>
          </div>

          <div style={{ background: 'var(--bg-tertiary)', padding: '0.85rem', borderRadius: '6px' }}>
            <div style={{ fontSize: '0.72rem', color: 'var(--accent-emerald-light)', fontWeight: 700, textTransform: 'uppercase' }}>Farmer Experience</div>
            <div style={{ fontSize: '0.85rem', color: '#e2e8f0', marginTop: '0.25rem' }}>{activeStep.farmerExperience}</div>
          </div>

          <div style={{ background: 'var(--bg-tertiary)', padding: '0.85rem', borderRadius: '6px' }}>
            <div style={{ fontSize: '0.72rem', color: '#fbbf24', fontWeight: 700, textTransform: 'uppercase' }}>Officer Visibility</div>
            <div style={{ fontSize: '0.85rem', color: '#e2e8f0', marginTop: '0.25rem' }}>{activeStep.officerVisibility}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export const CapacityModelInteractive: React.FC = () => {
  const [baseline, setBaseline] = useState<number>(400);
  const [adjustment, setAdjustment] = useState<number>(-100);

  const usable = Math.max(0, baseline + adjustment);

  return (
    <div className="interactive-diagram-container">
      <div className="diagram-header">
        <div className="diagram-title">
          <span>📐</span>
          <span>Interactive Capacity Model: Baseline + Adjustment = Usable</span>
        </div>
        <div className="diagram-interactive-hint">
          <span>🎮 Adjust sliders to simulate operational changes</span>
        </div>
      </div>

      <div className="demo-watermark-banner">
        <span>⚠️ EDUCATIONAL SIMULATION — DEMO VALUES ONLY</span>
        <span>FORMULA VISUALIZER</span>
      </div>

      <div className="capacity-calc-widget">
        <div className="calc-control-group">
          <div className="calc-label-row">
            <span>1. Baseline Capacity (Configured by Officer)</span>
            <span style={{ fontFamily: 'var(--font-mono)', color: 'var(--accent-blue)' }}>{baseline} quintals / day</span>
          </div>
          <input
            type="range"
            min="100"
            max="1000"
            step="50"
            value={baseline}
            onChange={(e) => setBaseline(Number(e.target.value))}
            className="calc-slider"
          />
        </div>

        <div className="calc-control-group">
          <div className="calc-label-row">
            <span>2. Operational Adjustment (Logged by Operator during breakdown/rain)</span>
            <span style={{ fontFamily: 'var(--font-mono)', color: adjustment < 0 ? 'var(--accent-rose)' : 'var(--accent-emerald-light)' }}>
              {adjustment > 0 ? `+${adjustment}` : adjustment} quintals
            </span>
          </div>
          <input
            type="range"
            min="-300"
            max="100"
            step="25"
            value={adjustment}
            onChange={(e) => setAdjustment(Number(e.target.value))}
            className="calc-slider"
          />
        </div>

        <div className="calc-result-display">
          <div className="calc-result-item">
            <span className="calc-result-val" style={{ color: 'var(--accent-blue)' }}>{baseline} q</span>
            <span className="calc-result-label">Baseline</span>
          </div>

          <span style={{ fontSize: '1.5rem', color: 'var(--text-muted)' }}>+</span>

          <div className="calc-result-item">
            <span className="calc-result-val" style={{ color: adjustment < 0 ? 'var(--accent-rose)' : 'var(--accent-emerald-light)' }}>
              {adjustment} q
            </span>
            <span className="calc-result-label">Adjustment</span>
          </div>

          <span style={{ fontSize: '1.5rem', color: 'var(--text-muted)' }}>=</span>

          <div className="calc-result-item">
            <span className="calc-result-val" style={{ color: usable < 200 ? 'var(--accent-amber)' : 'var(--accent-emerald-light)' }}>
              {usable} q
            </span>
            <span className="calc-result-label">Current Usable Intake</span>
          </div>
        </div>

        <div style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', background: 'var(--bg-tertiary)', padding: '0.85rem', borderRadius: '6px' }}>
          <strong>Operational Consequence:</strong> At {usable} quintals usable capacity, the system automatically allocates exactly{' '}
          <strong style={{ color: 'var(--text-primary)' }}>{Math.floor(usable / 50)} standard 50-quintal tractor appointments</strong> across today’s operating hours.
          {adjustment < 0 && (
            <span style={{ color: 'var(--accent-rose)', display: 'block', marginTop: '0.4rem' }}>
              ⚠️ Capacity reduction of {Math.abs(adjustment)} quintals active. Remaining slots throttled; affected booked farmers receive reschedule alerts.
            </span>
          )}
        </div>
      </div>
    </div>
  );
};
