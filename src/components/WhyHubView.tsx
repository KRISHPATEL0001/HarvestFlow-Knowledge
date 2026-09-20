import React from 'react';
import { Breadcrumbs } from './Breadcrumbs';
import { WhyAccordion } from './WhyAccordion';

interface Props {
  onNavigateHome: () => void;
}

export const WhyHubView: React.FC<Props> = ({ onNavigateHome }) => {
  return (
    <div className="content-inner">
      <Breadcrumbs
        items={[
          { label: 'HarvestFlow Knowledge Base', onClick: onNavigateHome },
          { label: 'Reasoning' },
          { label: 'Why? Systems Explainer' }
        ]}
      />

      <header className="chapter-header">
        <div className="chapter-badge-row">
          <span className="project-tag">SYSTEMS REASONING</span>
          <span className="chapter-number-tag">17 CANONICAL QUESTIONS</span>
          <span className="reading-time-tag">⏱️ 14 min read</span>
        </div>

        <h1 className="chapter-title">The “Why?” Explanation Hub</h1>
        <p className="chapter-subtitle">
          Deep, honest engineering rationales answering why HarvestFlow is designed this way—and why alternative approaches were rejected.
        </p>
      </header>

      {/* Renders all 17 Why items */}
      <WhyAccordion />
    </div>
  );
};
