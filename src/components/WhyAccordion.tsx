import React, { useState } from 'react';
import { WHY_ITEMS } from '../data/whySectionsData';
import { EvidenceBadge } from './EvidenceBadge';

interface Props {
  whyId?: string; // If specified, renders single accordion for that whyId
}

export const WhyAccordion: React.FC<Props> = ({ whyId }) => {
  const [openIds, setOpenIds] = useState<Record<string, boolean>>({});

  const toggle = (id: string) => {
    setOpenIds(prev => ({ ...prev, [id]: !prev[id] }));
  };

  const items = whyId ? WHY_ITEMS.filter(w => w.id === whyId) : WHY_ITEMS;

  return (
    <div style={{ margin: '1.5rem 0' }}>
      {items.map(item => {
        const isOpen = !!openIds[item.id];
        return (
          <div key={item.id} className={`accordion-wrapper ${isOpen ? 'open' : ''}`}>
            <div
              className="accordion-header"
              onClick={() => toggle(item.id)}
              role="button"
              tabIndex={0}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', flex: 1 }}>
                <span style={{ fontSize: '1.1rem' }}>💡</span>
                <span style={{ fontWeight: 700, color: 'var(--text-primary)' }}>{item.question}</span>
                <EvidenceBadge type={item.evidenceType} showTooltip={false} />
              </div>
              <span className="accordion-icon">{isOpen ? '▲' : '▼'}</span>
            </div>

            {isOpen && (
              <div className="accordion-body">
                <div style={{
                  background: 'var(--bg-tertiary)',
                  padding: '0.75rem 1rem',
                  borderRadius: '6px',
                  marginBottom: '1rem',
                  borderLeft: '3px solid var(--accent-emerald)'
                }}>
                  <strong style={{ color: 'var(--accent-emerald-light)' }}>Summary: </strong>
                  <span>{item.shortSummary}</span>
                </div>

                <div style={{ marginBottom: '1rem' }}>
                  <h5 style={{ color: 'var(--text-primary)', fontSize: '0.9rem', marginBottom: '0.35rem', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
                    Canonical Rationale
                  </h5>
                  <p style={{ color: '#cbd5e1', lineHeight: 1.7 }}>
                    {item.canonicalReason}
                  </p>
                </div>

                <div style={{
                  background: 'rgba(244, 63, 94, 0.1)',
                  padding: '0.75rem 1rem',
                  borderRadius: '6px',
                  borderLeft: '3px solid var(--accent-rose)'
                }}>
                  <strong style={{ color: 'var(--accent-rose)', fontSize: '0.85rem', textTransform: 'uppercase' }}>
                    What Goes Wrong If Ignored:
                  </strong>
                  <p style={{ color: '#fecdd3', fontSize: '0.88rem', marginTop: '0.2rem', lineHeight: 1.6 }}>
                    {item.whatGoesWrongIfIgnored}
                  </p>
                </div>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};
