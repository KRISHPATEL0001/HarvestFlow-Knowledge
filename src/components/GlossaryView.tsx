import React, { useState } from 'react';
import { GLOSSARY_ITEMS } from '../data/glossaryData';
import { Breadcrumbs } from './Breadcrumbs';
import { FAQ_ITEMS } from '../data/faqData';

interface Props {
  onNavigateHome: () => void;
}

export const GlossaryView: React.FC<Props> = ({ onNavigateHome }) => {
  const [search, setSearch] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('ALL');

  const categories = ['ALL', 'Core Concept', 'Operational State', 'System Architecture', 'Governance & Legal'];

  const filtered = GLOSSARY_ITEMS.filter(item => {
    const matchesCat = selectedCategory === 'ALL' || item.category === selectedCategory;
    const matchesSearch = item.term.toLowerCase().includes(search.toLowerCase()) ||
      item.definition.toLowerCase().includes(search.toLowerCase()) ||
      item.authority.toLowerCase().includes(search.toLowerCase());
    return matchesCat && matchesSearch;
  });

  return (
    <div className="content-inner">
      <Breadcrumbs
        items={[
          { label: 'HarvestFlow Knowledge Base', onClick: onNavigateHome },
          { label: 'Reference' },
          { label: 'Canonical Glossary' }
        ]}
      />

      <header className="chapter-header">
        <div className="chapter-badge-row">
          <span className="project-tag">CANONICAL DEFINITIONS</span>
          <span className="chapter-number-tag">27 DEFINED TERMS</span>
          <span className="reading-time-tag">⏱️ 6 min read</span>
        </div>

        <h1 className="chapter-title">Canonical Glossary</h1>
        <p className="chapter-subtitle">
          Precise operational definitions from the HarvestFlow Lean Deep-Research Source of Truth.
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
          placeholder="Search glossary terms, definitions, or authorities..."
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

      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        {filtered.map(item => (
          <div
            key={item.id}
            id={item.id}
            style={{
              background: 'var(--bg-card)',
              border: '1px solid var(--border-subtle)',
              borderRadius: '8px',
              padding: '1.25rem 1.5rem',
              transition: 'border-color var(--transition-fast)'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.4rem', flexWrap: 'wrap', gap: '0.5rem' }}>
              <h3 style={{ margin: 0, fontFamily: 'var(--font-display)', color: 'var(--text-primary)', fontSize: '1.2rem' }}>
                {item.term}
              </h3>
              <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
                <span className="project-tag" style={{ fontSize: '0.65rem' }}>{item.category}</span>
                <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Authority: {item.authority}</span>
              </div>
            </div>

            <p style={{ color: '#cbd5e1', fontSize: '0.95rem', lineHeight: 1.6, margin: '0.5rem 0' }}>
              {item.definition}
            </p>

            {item.canonicalQuote && (
              <blockquote style={{
                borderLeft: '3px solid var(--accent-emerald)',
                padding: '0.4rem 0.75rem',
                margin: '0.75rem 0 0',
                background: 'var(--accent-emerald-dim)',
                borderRadius: '0 6px 6px 0',
                fontSize: '0.85rem',
                color: '#e2e8f0',
                fontStyle: 'italic'
              }}>
                {item.canonicalQuote}
              </blockquote>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

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
