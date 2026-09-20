import React, { useState } from 'react';
import { FAQ_ITEMS } from '../data/faqData';
import { Breadcrumbs } from './Breadcrumbs';

interface Props {
  onNavigateHome: () => void;
}

export const FaqView: React.FC<Props> = ({ onNavigateHome }) => {
  const [search, setSearch] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('ALL');

  const categories = ['ALL', 'System Scope', 'Architecture & Tech', 'Operational Logic', 'Government & Data', 'Jury Tough Questions'];

  return (
    <div className="content-inner">
      <Breadcrumbs
        items={[
          { label: 'HarvestFlow Knowledge Base', onClick: onNavigateHome },
          { label: 'Preparation' },
          { label: 'FAQ & Jury Cheatsheet' }
        ]}
      />

      <header className="chapter-header">
        <div className="chapter-badge-row">
          <span className="project-tag">JURY & TEAM REFERENCE</span>
          <span className="chapter-number-tag">22 CORE QUESTIONS</span>
          <span className="reading-time-tag">⏱️ 12 min read</span>
        </div>

        <h1 className="chapter-title">FAQ & Jury Defense Cheatsheet</h1>
        <p className="chapter-subtitle">
          Direct, grounded answers to tough questions asked by Ministry evaluators, technical judges, and state officials.
        </p>
      </header>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '2rem' }}>
        <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className="project-tag"
              style={{
                cursor: 'pointer',
                background: selectedCategory === cat ? 'var(--accent-emerald)' : 'var(--bg-tertiary)',
                color: selectedCategory === cat ? '#0f172a' : 'var(--text-secondary)',
                border: '1px solid var(--border-medium)',
                fontWeight: 600
              }}
            >
              {cat}
            </button>
          ))}
        </div>

        <input
          type="text"
          placeholder="Search questions, answers, or dangerous claims to avoid..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          style={{
            width: '100%',
            background: 'var(--bg-secondary)',
            border: '1px solid var(--border-medium)',
            color: 'var(--text-primary)',
            padding: '0.75rem 1rem',
            borderRadius: '8px',
            fontSize: '1rem'
          }}
        />
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
        {FAQ_ITEMS.filter(item => {
          const matchesCat = selectedCategory === 'ALL' || item.category === selectedCategory;
          const matchesSearch = item.question.toLowerCase().includes(search.toLowerCase()) ||
                                item.shortAnswer.toLowerCase().includes(search.toLowerCase()) ||
                                item.detailedAnswer.toLowerCase().includes(search.toLowerCase());
          return matchesCat && matchesSearch;
        }).map(item => (
          <div
            key={item.id}
            id={item.id}
            style={{
              background: 'var(--bg-card)',
              border: '1px solid var(--border-subtle)',
              borderRadius: '8px',
              padding: '1.5rem',
              boxShadow: 'var(--shadow-sm)'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: '1rem', marginBottom: '0.75rem' }}>
              <h3 style={{ margin: 0, fontFamily: 'var(--font-display)', color: 'var(--text-primary)', fontSize: '1.2rem', lineHeight: 1.3 }}>
                {item.question}
              </h3>
              <span className="project-tag" style={{ fontSize: '0.65rem', flexShrink: 0 }}>{item.category}</span>
            </div>

            <div style={{
              background: 'var(--bg-tertiary)',
              padding: '0.75rem 1rem',
              borderRadius: '6px',
              marginBottom: '1rem',
              borderLeft: '3px solid var(--accent-emerald)'
            }}>
              <strong style={{ color: 'var(--accent-emerald-light)', fontSize: '0.85rem', textTransform: 'uppercase' }}>
                Quick Pitch (15-Second Answer):
              </strong>
              <div style={{ color: '#f8fafc', fontSize: '0.95rem', marginTop: '0.2rem', fontWeight: 500 }}>
                {item.shortAnswer}
              </div>
            </div>

            <div style={{ color: '#cbd5e1', fontSize: '0.92rem', lineHeight: 1.7, marginBottom: '1rem' }}>
              <strong style={{ color: 'var(--text-primary)' }}>Detailed Defense: </strong>
              {item.detailedAnswer}
            </div>

            {item.dangerAlert && (
              <div style={{
                background: 'rgba(244, 63, 94, 0.1)',
                border: '1px solid rgba(244, 63, 94, 0.3)',
                padding: '0.75rem 1rem',
                borderRadius: '6px',
                color: '#fecdd3',
                fontSize: '0.85rem',
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem'
              }}>
                <span style={{ fontSize: '1.1rem' }}>🚨</span>
                <div>{item.dangerAlert}</div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};
