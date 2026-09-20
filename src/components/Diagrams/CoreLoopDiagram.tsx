import React, { useState } from 'react';

interface LoopNode {
  id: string;
  name: string;
  question: string;
  action: string;
  actor: string;
  systemEffect: string;
}

const LOOP_NODES: LoopNode[] = [
  {
    id: 'capacity',
    name: 'CAPACITY',
    question: 'How much can the centre handle today?',
    action: 'Baseline intake configured + operational adjustments applied (e.g. 400q - 100q = 300q).',
    actor: 'Centre Operator / Supervising Officer',
    systemEffect: 'Dynamically establishes available slot quotas and prevents yard overbooking.'
  },
  {
    id: 'booking',
    name: 'BOOKING',
    question: 'When should the farmer arrive?',
    action: 'Farmer or assisted kiosk selects available slot based on verified usable capacity.',
    actor: 'Farmer / CSC Operator',
    systemEffect: 'Locks slot quota, issues universal Token (e.g. HF-DEMO-024), and sends SMS confirmation.'
  },
  {
    id: 'check-in',
    name: 'CHECK-IN',
    question: 'Has the farmer physically arrived at the gate?',
    action: 'Gate operator scans or enters token; logs arrival timestamp.',
    actor: 'Gate Operator',
    systemEffect: 'Transitions state from BOOKED to CHECKED_IN and enters farmer into live waiting queue.'
  },
  {
    id: 'queue',
    name: 'QUEUE',
    question: 'Where is the farmer in the active yard line?',
    action: 'Vehicles sequenced deterministically on first-checked-in, first-served basis.',
    actor: 'HarvestFlow Queue Engine',
    systemEffect: 'Displays live queue position; triggers turn alert SMS when 2 vehicles remain ahead.'
  },
  {
    id: 'event',
    name: 'EVENT',
    question: 'What is happening right now in the mandi?',
    action: 'Weighment completed, quality tested, or sudden disruption declared (e.g. scale motor fails).',
    actor: 'Weighbridge Operator / Grader',
    systemEffect: 'Records operational milestone and recalculates remaining centre capacity.'
  },
  {
    id: 'notification',
    name: 'NOTIFICATION',
    question: 'Who needs to know about this change?',
    action: 'Event-driven alerts dispatched immediately via SMS.',
    actor: 'HarvestFlow Notification Service',
    systemEffect: 'Alerts farmers before they leave home if capacity drops; confirms stage completions.'
  },
  {
    id: 'exception',
    name: 'EXCEPTION',
    question: 'Is human supervisory intervention needed?',
    action: 'Stale centres, overload events, and quality disputes surfaced to district officer.',
    actor: 'Supervising Officer',
    systemEffect: 'Allows authorized resolution, audit reconciliation, and centre resumption.'
  }
];

export const CoreLoopDiagram: React.FC = () => {
  const [selectedNode, setSelectedNode] = useState<LoopNode>(LOOP_NODES[0]);

  return (
    <div className="interactive-diagram-container">
      <div className="diagram-header">
        <div className="diagram-title">
          <span>🔄</span>
          <span>The Core HarvestFlow Loop: Closed-Loop State Coordination</span>
        </div>
        <div className="diagram-interactive-hint">
          <span>👆 Click any node to inspect the operational effect</span>
        </div>
      </div>

      <div className="core-loop-nodes">
        {LOOP_NODES.map((node, index) => (
          <React.Fragment key={node.id}>
            <div
              className={`core-loop-node ${selectedNode.id === node.id ? 'active' : ''}`}
              onClick={() => setSelectedNode(node)}
              role="button"
              tabIndex={0}
            >
              <span>{node.name}</span>
            </div>
            {index < LOOP_NODES.length - 1 && (
              <span className="core-loop-arrow">→</span>
            )}
          </React.Fragment>
        ))}
      </div>

      <div className="journey-detail-box" style={{ marginTop: '1rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
          <h4 style={{ margin: 0, color: 'var(--accent-emerald-light)', fontFamily: 'var(--font-display)', fontSize: '1.1rem' }}>
            {selectedNode.name} Step in the Loop
          </h4>
          <span className="project-tag" style={{ fontSize: '0.65rem' }}>Actor: {selectedNode.actor}</span>
        </div>

        <p style={{ color: '#94a3b8', fontSize: '0.9rem', fontStyle: 'italic', marginBottom: '0.75rem' }}>
          “{selectedNode.question}”
        </p>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1rem' }}>
          <div style={{ background: 'var(--bg-tertiary)', padding: '0.85rem', borderRadius: '6px', borderLeft: '3px solid var(--accent-blue)' }}>
            <div style={{ fontSize: '0.75rem', color: 'var(--accent-blue)', fontWeight: 700, textTransform: 'uppercase' }}>Operational Action</div>
            <div style={{ fontSize: '0.88rem', color: '#e2e8f0', marginTop: '0.25rem' }}>{selectedNode.action}</div>
          </div>

          <div style={{ background: 'var(--bg-tertiary)', padding: '0.85rem', borderRadius: '6px', borderLeft: '3px solid var(--accent-emerald)' }}>
            <div style={{ fontSize: '0.75rem', color: 'var(--accent-emerald-light)', fontWeight: 700, textTransform: 'uppercase' }}>Digital Ripple Effect</div>
            <div style={{ fontSize: '0.88rem', color: '#e2e8f0', marginTop: '0.25rem' }}>{selectedNode.systemEffect}</div>
          </div>
        </div>
      </div>
    </div>
  );
};
