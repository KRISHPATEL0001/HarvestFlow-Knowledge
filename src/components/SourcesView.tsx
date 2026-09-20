import React from 'react';
import { Breadcrumbs } from './Breadcrumbs';
import { EvidenceBadge } from './EvidenceBadge';

interface Props {
  onNavigateHome: () => void;
}

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

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '1rem' }}>
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
