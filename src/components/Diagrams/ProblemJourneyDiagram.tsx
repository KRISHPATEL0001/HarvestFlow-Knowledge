import React, { useState } from 'react';

interface Stage {
  id: string;
  num: string;
  name: string;
  symptom: string;
  rootCause: string;
  failureMode: string;
  harvestFlowSolution: string;
}

const STAGES: Stage[] = [
  {
    id: 'plan',
    num: '01',
    name: 'PLAN',
    symptom: 'Farmers leave home on word-of-mouth or rumour.',
    rootCause: 'Zero real-time information regarding centre opening hours, usable intake quotas, or holiday schedules.',
    failureMode: 'Arrival Mismatch: 200 farmers arrive simultaneously on Monday morning with 1,500 quintals.',
    harvestFlowSolution: 'Capacity-Aware Slot Booking: Confirms available intake quota before the farmer leaves home.'
  },
  {
    id: 'arrive',
    num: '02',
    name: 'ARRIVE',
    symptom: 'Vehicles form 2-km lines spilling onto highways.',
    rootCause: 'No gate sequencing mechanism; nominal booking is not tied to physical yard staging.',
    failureMode: 'Queue Mismatch: Early arrivals cut in line; tractor carts block weighbridge entrances.',
    harvestFlowSolution: 'Universal Token Check-in: Logs arrival timestamp and places vehicle into active waiting queue.'
  },
  {
    id: 'queue',
    num: '03',
    name: 'QUEUE',
    symptom: 'Overnight waiting in tractor carts without food, water, or safety.',
    rootCause: 'Total opacity on queue depth and processing speed; farmers fear losing their spot if they leave.',
    failureMode: 'Disruption Mismatch: A scale breaks down, but no one in the queue is informed for 4 hours.',
    harvestFlowSolution: 'Live Queue State & SMS Turn Alerts: Alerts sent when 2 vehicles remain ahead.'
  },
  {
    id: 'process',
    num: '04',
    name: 'PROCESS',
    symptom: 'Subjective quality disputes, moisture deductions, and verbal turnaways.',
    rootCause: 'Grader rejections are unrecorded; no documented dispute or retest path.',
    failureMode: 'Information Mismatch: Farmer is sent home without written proof or recourse.',
    harvestFlowSolution: 'Quality Branching: Explicit reason codes (Moisture > 17%) and permitted dispute/retest steps.'
  },
  {
    id: 'complete',
    num: '05',
    name: 'COMPLETE',
    symptom: 'Informal paper chits given; delayed entry into government software.',
    rootCause: 'Operator overwhelmed by duplicate data entry between physical registers and state portals.',
    failureMode: 'Operator Overload: Stale records; farmer leaves with unverified hand-written receipt.',
    harvestFlowSolution: 'One Action → Multiple Effects: Digital weighbridge sync generates instant SMS receipt.'
  },
  {
    id: 'track',
    num: '06',
    name: 'TRACK',
    symptom: 'Farmers make repeated, anxious trips to bank branches for weeks.',
    rootCause: 'Procurement completion and treasury disbursement are disconnected silos.',
    failureMode: 'Payment Visibility Mismatch: Farmer doesn’t know if delay is due to bill rejection or bank clearing.',
    harvestFlowSolution: 'Verified Payment Lifecycle Tracking: Surfaces treasury submission and bank credit confirmation.'
  }
];

export const ProblemJourneyDiagram: React.FC = () => {
  const [selectedStage, setSelectedStage] = useState<Stage>(STAGES[0]);

  return (
    <div className="interactive-diagram-container">
      <div className="diagram-header">
        <div className="diagram-title">
          <span>⚠️</span>
          <span>The Problem Journey: Failures Across the Lifecycle</span>
        </div>
        <div className="diagram-interactive-hint">
          <span>👆 Click any stage to inspect failure modes</span>
        </div>
      </div>

      <div className="journey-flow-grid">
        {STAGES.map((s) => (
          <div
            key={s.id}
            className={`journey-step-card ${selectedStage.id === s.id ? 'active' : ''}`}
            onClick={() => setSelectedStage(s)}
            role="button"
            tabIndex={0}
          >
            <span className="journey-step-num">{s.num}</span>
            <span className="journey-step-name">{s.name}</span>
          </div>
        ))}
      </div>

      <div className="journey-detail-box">
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.75rem' }}>
          <h4 style={{ margin: 0, color: 'var(--text-primary)', fontFamily: 'var(--font-display)', fontSize: '1.1rem' }}>
            Stage {selectedStage.num}: {selectedStage.name} Phase
          </h4>
          <span className="project-tag" style={{ fontSize: '0.65rem' }}>Lifecycle Step</span>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 220px), 1fr))', gap: '1rem' }}>
          <div style={{ background: 'var(--bg-tertiary)', padding: '0.85rem', borderRadius: '6px', borderLeft: '3px solid var(--accent-amber)' }}>
            <div style={{ fontSize: '0.75rem', color: 'var(--accent-amber)', fontWeight: 700, textTransform: 'uppercase' }}>Visible Symptom</div>
            <div style={{ fontSize: '0.88rem', color: '#e2e8f0', marginTop: '0.25rem' }}>{selectedStage.symptom}</div>
          </div>

          <div style={{ background: 'var(--bg-tertiary)', padding: '0.85rem', borderRadius: '6px', borderLeft: '3px solid var(--accent-rose)' }}>
            <div style={{ fontSize: '0.75rem', color: 'var(--accent-rose)', fontWeight: 700, textTransform: 'uppercase' }}>Root Cause & Failure Mode</div>
            <div style={{ fontSize: '0.88rem', color: '#e2e8f0', marginTop: '0.25rem' }}>
              <strong>{selectedStage.failureMode}</strong> — {selectedStage.rootCause}
            </div>
          </div>

          <div style={{ background: 'var(--bg-tertiary)', padding: '0.85rem', borderRadius: '6px', borderLeft: '3px solid var(--accent-emerald)' }}>
            <div style={{ fontSize: '0.75rem', color: 'var(--accent-emerald-light)', fontWeight: 700, textTransform: 'uppercase' }}>HarvestFlow Solution</div>
            <div style={{ fontSize: '0.88rem', color: '#e2e8f0', marginTop: '0.25rem' }}>{selectedStage.harvestFlowSolution}</div>
          </div>
        </div>
      </div>
    </div>
  );
};
