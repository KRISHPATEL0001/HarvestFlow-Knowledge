import React, { useState } from 'react';
import { EXCLUDED_FEATURES } from '../data/exclusionsData';
import { Breadcrumbs } from './Breadcrumbs';
import { EvidenceBadge } from './EvidenceBadge';
import { WhyAccordion } from './WhyAccordion';

interface Props {
  onNavigateHome: () => void;
}

export const ExclusionsView: React.FC<Props> = ({ onNavigateHome }) => {
  const [filter, setFilter] = useState<string>('ALL');

  const categories = ['ALL', 'AI / Automation', 'Infrastructure & Architecture', 'Fintech & Identity', 'Supply Chain & Logistics'];

  const filtered = EXCLUDED_FEATURES.filter(item => {
    return filter === 'ALL' || item.category === filter;
  });

  return (
    <div className="content-inner">
      <Breadcrumbs
        items={[
          { label: 'HarvestFlow Knowledge Base', onClick: onNavigateHome },
          { label: 'Architecture & Scope' },
          { label: 'Deliberately Excluded Features' }
        ]}
      />

      <header className="chapter-header">
        <div className="chapter-badge-row">
          <EvidenceBadge type="OUT OF SCOPE" />
          <span className="chapter-number-tag">16 EXCLUDED FEATURES</span>
          <span className="reading-time-tag">⏱️ 8 min read</span>
        </div>

        <h1 className="chapter-title">Why We Deliberately Don’t Build This</h1>
        <p className="chapter-subtitle">
          The 16 features rejected during our necessity review to protect engineering discipline, avoid government adoption friction, and eliminate unnecessary tech theatre.
        </p>
      </header>

      <div className="callout-box RULE" style={{ marginBottom: '2rem' }}>
        <div className="callout-title">🛡️ THE MASTER FEATURE ADMISSION RULE</div>
        <div className="callout-content">
          “A feature needs a problem, an owner, a data source, an operational workflow, and a measurable benefit before it enters HarvestFlow. If removing a feature makes the solution clearer without weakening SIH26032 coverage, remove it.”
        </div>
      </div>

      <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', marginBottom: '1.5rem' }}>
        {categories.map(cat => (
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

      <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
        {filtered.map(item => (
          <div
            key={item.id}
            style={{
              background: 'var(--bg-card)',
              border: '1px solid var(--border-subtle)',
              borderRadius: '8px',
              padding: '1.5rem'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.75rem', flexWrap: 'wrap', gap: '0.5rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                <span style={{ fontSize: '1.2rem', color: 'var(--accent-rose)' }}>🚫</span>
                <h3 style={{ margin: 0, fontFamily: 'var(--font-display)', color: 'var(--text-primary)', fontSize: '1.15rem' }}>
                  {item.name}
                </h3>
              </div>
              <span className="project-tag" style={{ fontSize: '0.65rem' }}>{item.category}</span>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 260px), 1fr))', gap: '1rem', marginTop: '0.75rem' }}>
              <div style={{ background: 'var(--bg-tertiary)', padding: '0.85rem', borderRadius: '6px' }}>
                <div style={{ fontSize: '0.72rem', color: 'var(--accent-amber)', fontWeight: 700, textTransform: 'uppercase' }}>
                  Why It Looks Attractive
                </div>
                <div style={{ fontSize: '0.88rem', color: '#cbd5e1', marginTop: '0.25rem' }}>
                  {item.whyAttractive}
                </div>
              </div>

              <div style={{ background: 'rgba(244, 63, 94, 0.08)', padding: '0.85rem', borderRadius: '6px', borderLeft: '3px solid var(--accent-rose)' }}>
                <div style={{ fontSize: '0.72rem', color: 'var(--accent-rose)', fontWeight: 700, textTransform: 'uppercase' }}>
                  Why HarvestFlow Excludes It
                </div>
                <div style={{ fontSize: '0.88rem', color: '#fecdd3', marginTop: '0.25rem' }}>
                  {item.whyExcluded}
                </div>
              </div>

              <div style={{ background: 'var(--accent-emerald-dim)', padding: '0.85rem', borderRadius: '6px', borderLeft: '3px solid var(--accent-emerald)' }}>
                <div style={{ fontSize: '0.72rem', color: 'var(--accent-emerald-light)', fontWeight: 700, textTransform: 'uppercase' }}>
                  What HarvestFlow Does Instead
                </div>
                <div style={{ fontSize: '0.88rem', color: '#e2e8f0', marginTop: '0.25rem' }}>
                  {item.harvestFlowAlternative}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export const SourcesView: React.FC<Props> = ({ onNavigateHome }) => {
  return (
    <div className="content-inner">
      <Breadcrumbs
        items={[
          { label: 'HarvestFlow Knowledge Base', onClick: onNavigateHome },
          { label: 'Research & Evidence' },
          { label: 'Canonical Source Index' }
        ]}
      />

      <header className="chapter-header">
        <div className="chapter-badge-row">
          <EvidenceBadge type="OFFICIAL" />
          <span className="chapter-number-tag">CANONICAL RESEARCH SOURCES</span>
          <span className="reading-time-tag">⏱️ 7 min read</span>
        </div>

        <h1 className="chapter-title">Canonical Source Index & Citations</h1>
        <p className="chapter-subtitle">
          Verified external government portals, gazette publications, and empirical research studies grounding HarvestFlow.
        </p>
      </header>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
        <h2 style={{ fontFamily: 'var(--font-display)', color: 'var(--text-primary)', fontSize: '1.4rem', borderBottom: '1px solid var(--border-subtle)', paddingBottom: '0.5rem' }}>
          Official Government Portals & Guidelines
        </h2>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))', gap: '1rem' }}>
          <div style={{ background: 'var(--bg-card)', border: '1px solid var(--border-medium)', borderRadius: '8px', padding: '1.25rem' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '0.5rem' }}>
              <h3 style={{ margin: 0, color: 'var(--text-primary)', fontSize: '1.1rem' }}>Madhya Pradesh e-Uparjan</h3>
              <EvidenceBadge type="OFFICIAL" showTooltip={false} />
            </div>
            <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', marginBottom: '0.75rem' }}>
              Demonstrates farmer registration, slot booking (*Kisan Slot Booking*), procurement intake, transport, and direct payment tracking.
            </p>
            <a href="https://mpeuparjan.nic.in/" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--accent-emerald-light)', fontSize: '0.85rem', textDecoration: 'underline' }}>
              https://mpeuparjan.nic.in/ ↗
            </a>
          </div>

          <div style={{ background: 'var(--bg-card)', border: '1px solid var(--border-medium)', borderRadius: '8px', padding: '1.25rem' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '0.5rem' }}>
              <h3 style={{ margin: 0, color: 'var(--text-primary)', fontSize: '1.1rem' }}>Telangana OPMS (CGG)</h3>
              <EvidenceBadge type="OFFICIAL" showTooltip={false} />
            </div>
            <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', marginBottom: '0.75rem' }}>
              Online Procurement Management System: paddy procurement, transport tracking, tablet data collection, SMS alerts, and dashboards.
            </p>
            <a href="https://www.cgg.gov.in/it_project/online-procurement-management-system-opms/" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--accent-emerald-light)', fontSize: '0.85rem', textDecoration: 'underline' }}>
              https://www.cgg.gov.in/it_project/online-procurement-management-system-opms/ ↗
            </a>
          </div>

          <div style={{ background: 'var(--bg-card)', border: '1px solid var(--border-medium)', borderRadius: '8px', padding: '1.25rem' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '0.5rem' }}>
              <h3 style={{ margin: 0, color: 'var(--text-primary)', fontSize: '1.1rem' }}>Chhattisgarh KMS 2025–26</h3>
              <EvidenceBadge type="OFFICIAL" showTooltip={false} />
            </div>
            <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', marginBottom: '0.75rem' }}>
              Government Janman publication detailing online tokens, Agristack e-KYC, ICCC monitoring, and assisted society tokens.
            </p>
            <a href="https://jansampark.cg.gov.in/Janman/EN_OCT2025/JanmanOct2025_eng.pdf" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--accent-emerald-light)', fontSize: '0.85rem', textDecoration: 'underline' }}>
              https://jansampark.cg.gov.in/Janman/EN_OCT2025/JanmanOct2025_eng.pdf ↗
            </a>
          </div>

          <div style={{ background: 'var(--bg-card)', border: '1px solid var(--border-medium)', borderRadius: '8px', padding: '1.25rem' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '0.5rem' }}>
              <h3 style={{ margin: 0, color: 'var(--text-primary)', fontSize: '1.1rem' }}>Himachal Pradesh Portal</h3>
              <EvidenceBadge type="OFFICIAL" showTooltip={false} />
            </div>
            <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', marginBottom: '0.75rem' }}>
              Public procurement portal documenting farmer tokens, procurement entry, and data transfer to Central Food Procurement Portal (CFPP) via API.
            </p>
            <a href="https://hpappp.hp.gov.in/Citizen/SoftwareInterfaces.aspx" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--accent-emerald-light)', fontSize: '0.85rem', textDecoration: 'underline' }}>
              https://hpappp.hp.gov.in/Citizen/SoftwareInterfaces.aspx ↗
            </a>
          </div>

          <div style={{ background: 'var(--bg-card)', border: '1px solid var(--border-medium)', borderRadius: '8px', padding: '1.25rem' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '0.5rem' }}>
              <h3 style={{ margin: 0, color: 'var(--text-primary)', fontSize: '1.1rem' }}>API Setu Platform</h3>
              <EvidenceBadge type="OFFICIAL" showTooltip={false} />
            </div>
            <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', marginBottom: '0.75rem' }}>
              MeitY/NIC Open API platform for secure, standardized citizen data interoperability between public systems.
            </p>
            <a href="https://www.apisetu.gov.in/" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--accent-emerald-light)', fontSize: '0.85rem', textDecoration: 'underline' }}>
              https://www.apisetu.gov.in/ ↗
            </a>
          </div>

          <div style={{ background: 'var(--bg-card)', border: '1px solid var(--border-medium)', borderRadius: '8px', padding: '1.25rem' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '0.5rem' }}>
              <h3 style={{ margin: 0, color: 'var(--text-primary)', fontSize: '1.1rem' }}>GIGW 3.0 Guidelines</h3>
              <EvidenceBadge type="OFFICIAL" showTooltip={false} />
            </div>
            <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', marginBottom: '0.75rem' }}>
              Guidelines for Indian Government Websites and Apps: WCAG 2.1 AA accessibility, cybersecurity, and software lifecycle standards.
            </p>
            <a href="https://guidelines.india.gov.in/" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--accent-emerald-light)', fontSize: '0.85rem', textDecoration: 'underline' }}>
              https://guidelines.india.gov.in/ ↗
            </a>
          </div>
        </div>

        <h2 style={{ fontFamily: 'var(--font-display)', color: 'var(--text-primary)', fontSize: '1.4rem', borderBottom: '1px solid var(--border-subtle)', paddingBottom: '0.5rem', marginTop: '1.5rem' }}>
          Government Reviews & Academic Studies
        </h2>

        <div style={{ background: 'var(--bg-secondary)', border: '1px solid var(--border-subtle)', borderRadius: '8px', padding: '1.25rem' }}>
          <ul style={{ color: '#cbd5e1', fontSize: '0.9rem', lineHeight: 1.8, marginLeft: '1.5rem' }}>
            <li><strong>DFPD / PIB Review (20 Feb 2026):</strong> High-level review on procurement-centre infrastructure and timely MSP payments.</li>
            <li><strong>DFPD / PIB Review (1 Sep 2026):</strong> Comprehensive review on procurement, storage, and stock movement.</li>
            <li><strong>West Bengal Procurement SOP:</strong> Departmental guidelines covering decentralized paddy procurement procedures.</li>
            <li><strong>Kerala Farmer Procurement Constraints Study:</strong> Empirical research on weighbridge bottlenecks and queue delays.</li>
            <li><strong>Telangana Decentralized Procurement Study:</strong> Ground-level evaluation of PPC operations, transport delays, and gunny bag shortages.</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

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
