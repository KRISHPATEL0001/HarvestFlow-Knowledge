import React from 'react';
import type { EvidenceType } from '../types/content';

interface Props {
  type: EvidenceType;
  showTooltip?: boolean;
}

const TOOLTIPS: Record<EvidenceType, string> = {
  'OFFICIAL': 'Official Government/Statutory Source (e.g. e-Uparjan, GIGW 3.0, API Setu)',
  'RESEARCH': 'Peer-reviewed academic study or documented institutional research',
  'FIELD REPORT': 'Documented real-world field condition or qualitative ground observation',
  'CURRENT PROTOTYPE': 'Actually implemented and working in the current team prototype codebase',
  'PROPOSED': 'Approved HarvestFlow design decision by Team Digital Dynamos',
  'PILOT HYPOTHESIS': 'Operational hypothesis that requires empirical validation during the pilot',
  'ILLUSTRATIVE': 'Fictional/demo example for educational illustration only',
  'OUT OF SCOPE': 'Deliberately evaluated and excluded from HarvestFlow scope'
};

export const EvidenceBadge: React.FC<Props> = ({ type, showTooltip = true }) => {
  return (
    <span
      className={`evidence-badge ${type}`}
      data-tooltip={showTooltip ? TOOLTIPS[type] : undefined}
      title={TOOLTIPS[type]}
    >
      <span className="badge-dot" style={{
        width: '6px',
        height: '6px',
        borderRadius: '50%',
        backgroundColor: 'currentColor',
        display: 'inline-block'
      }} />
      {type}
    </span>
  );
};
