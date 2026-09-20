import React, { useState, useEffect, useRef } from 'react';
import { ALL_CHAPTERS } from '../data/chapters';
import { GLOSSARY_ITEMS } from '../data/glossaryData';
import { FAQ_ITEMS } from '../data/faqData';
import { WHY_ITEMS } from '../data/whySectionsData';
import { EXCLUDED_FEATURES } from '../data/exclusionsData';
import { SOURCES_DATA } from '../data/sourcesData';
import { EvidenceBadge } from './EvidenceBadge';
import type { EvidenceType } from '../types/content';

interface SearchResult {
  id: string;
  type: 'Chapter' | 'Section' | 'Glossary' | 'FAQ' | 'Why?' | 'Exclusion' | 'Source';
  title: string;
  snippet: string;
  evidenceType?: EvidenceType;
  action: () => void;
}

interface Props {
  isOpen: boolean;
  onClose: () => void;
  onSelectChapter: (chapterId: string) => void;
  onSelectGlossary: () => void;
  onSelectFaq: () => void;
  onSelectWhy: () => void;
  onSelectExclusions: () => void;
  onSelectSources: () => void;
}

export const SearchModal: React.FC<Props> = ({
  isOpen,
  onClose,
  onSelectChapter,
  onSelectGlossary,
  onSelectFaq,
  onSelectWhy,
  onSelectExclusions,
  onSelectSources
}) => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<SearchResult[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 50);
    } else {
      setQuery('');
      setResults([]);
    }
  }, [isOpen]);

  // Handle ESC key to close
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  // Search logic across all canonical sources
  useEffect(() => {
    const q = query.trim().toLowerCase();
    if (q.length < 2) {
      setResults([]);
      return;
    }

    const matches: SearchResult[] = [];

    // 1. Search Chapters & Sections
    ALL_CHAPTERS.forEach(ch => {
      if (ch.title.toLowerCase().includes(q) || ch.subtitle.toLowerCase().includes(q)) {
        matches.push({
          id: ch.id,
          type: 'Chapter',
          title: `Chapter ${ch.number}: ${ch.title}`,
          snippet: ch.subtitle,
          evidenceType: ch.primaryEvidence,
          action: () => { onSelectChapter(ch.id); onClose(); }
        });
      }

      ch.sections.forEach(sec => {
        if (sec.title.toLowerCase().includes(q) || sec.markdown.toLowerCase().includes(q)) {
          // Extract a 120-character snippet around the match
          const idx = sec.markdown.toLowerCase().indexOf(q);
          const start = Math.max(0, idx - 40);
          const end = Math.min(sec.markdown.length, idx + 80);
          const snippetText = (start > 0 ? '...' : '') + sec.markdown.substring(start, end).replace(/[#*`>]/g, '') + (end < sec.markdown.length ? '...' : '');

          matches.push({
            id: `${ch.id}-${sec.id}`,
            type: 'Section',
            title: `${sec.title} (Chapter ${ch.number})`,
            snippet: snippetText,
            evidenceType: sec.evidenceType || ch.primaryEvidence,
            action: () => { onSelectChapter(ch.id); onClose(); }
          });
        }
      });
    });

    // 2. Search Glossary
    GLOSSARY_ITEMS.forEach(g => {
      if (g.term.toLowerCase().includes(q) || g.definition.toLowerCase().includes(q)) {
        matches.push({
          id: g.id,
          type: 'Glossary',
          title: `Glossary: ${g.term}`,
          snippet: g.definition,
          action: () => { onSelectGlossary(); onClose(); }
        });
      }
    });

    // 3. Search FAQs
    FAQ_ITEMS.forEach(f => {
      if (f.question.toLowerCase().includes(q) || f.shortAnswer.toLowerCase().includes(q) || f.detailedAnswer.toLowerCase().includes(q)) {
        matches.push({
          id: f.id,
          type: 'FAQ',
          title: `FAQ: ${f.question}`,
          snippet: f.shortAnswer,
          evidenceType: f.evidenceType,
          action: () => { onSelectFaq(); onClose(); }
        });
      }
    });

    // 4. Search Why Items
    WHY_ITEMS.forEach(w => {
      if (w.question.toLowerCase().includes(q) || w.canonicalReason.toLowerCase().includes(q)) {
        matches.push({
          id: w.id,
          type: 'Why?',
          title: `Why? ${w.question}`,
          snippet: w.shortSummary,
          evidenceType: w.evidenceType,
          action: () => { onSelectWhy(); onClose(); }
        });
      }
    });

    // 5. Search Excluded Features
    EXCLUDED_FEATURES.forEach(ex => {
      if (ex.name.toLowerCase().includes(q) || ex.whyExcluded.toLowerCase().includes(q) || ex.harvestFlowAlternative.toLowerCase().includes(q)) {
        matches.push({
          id: ex.id,
          type: 'Exclusion',
          title: `Excluded: ${ex.name}`,
          snippet: `Excluded: ${ex.whyExcluded}`,
          evidenceType: 'OUT OF SCOPE',
          action: () => { onSelectExclusions(); onClose(); }
        });
      }
    });

    // 6. Search Sources
    SOURCES_DATA.forEach(s => {
      if (s.name.toLowerCase().includes(q) || s.demonstratedCapabilities.some(c => c.toLowerCase().includes(q))) {
        matches.push({
          id: s.id,
          type: 'Source',
          title: `Source: ${s.name}`,
          snippet: s.whatCannotBeClaimed,
          evidenceType: 'OFFICIAL',
          action: () => { onSelectSources(); onClose(); }
        });
      }
    });

    setResults(matches.slice(0, 25)); // Cap at top 25 results
  }, [query, onSelectChapter, onSelectGlossary, onSelectFaq, onSelectWhy, onSelectExclusions, onSelectSources, onClose]);

  if (!isOpen) return null;

  const highlightMatch = (text: string, q: string) => {
    if (!q) return text;
    const parts = text.split(new RegExp(`(${q})`, 'gi'));
    return (
      <span>
        {parts.map((part, i) =>
          part.toLowerCase() === q.toLowerCase() ? (
            <mark key={i} style={{ background: 'var(--accent-emerald-dim)', color: 'var(--accent-emerald-light)', padding: '0.1rem 0.2rem', borderRadius: '2px' }}>
              {part}
            </mark>
          ) : (
            part
          )
        )}
      </span>
    );
  };

  return (
    <div className="search-modal-backdrop" onClick={onClose}>
      <div className="search-modal-container" onClick={(e) => e.stopPropagation()}>
        <div className="search-input-header">
          <span style={{ fontSize: '1.2rem', color: 'var(--text-muted)' }}>🔍</span>
          <input
            ref={inputRef}
            type="text"
            className="search-modal-input"
            placeholder="Search all 21 chapters, glossary, FAQs, why?, exclusions..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <span className="kbd-shortcut">ESC</span>
        </div>

        <div className="search-results-list">
          {query.trim().length >= 2 && results.length === 0 && (
            <div style={{ padding: '2rem', textAlign: 'center', color: 'var(--text-muted)' }}>
              No results found for “{query}”. Try searching for “e-Uparjan”, “AI/ML”, “Capacity”, “Disruption”, or “Stale”.
            </div>
          )}

          {results.map((res) => (
            <div
              key={res.id}
              className="search-result-card"
              onClick={res.action}
              role="button"
              tabIndex={0}
            >
              <div className="search-result-title">
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <span className="project-tag" style={{ fontSize: '0.65rem' }}>{res.type}</span>
                  <span>{highlightMatch(res.title, query)}</span>
                </div>
                {res.evidenceType && (
                  <EvidenceBadge type={res.evidenceType} showTooltip={false} />
                )}
              </div>
              <div className="search-result-snippet">
                {highlightMatch(res.snippet, query)}
              </div>
            </div>
          ))}

          {query.trim().length < 2 && (
            <div style={{ padding: '1.5rem', color: 'var(--text-muted)', fontSize: '0.85rem', lineHeight: 1.6 }}>
              <strong>Quick Search Suggestions:</strong>
              <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', marginTop: '0.5rem' }}>
                {['e-Uparjan', 'Capacity', 'Why no AI?', 'Disruption', 'Token', 'Stale data', 'API Setu', 'GIGW 3.0', 'Payment status'].map(term => (
                  <button
                    key={term}
                    onClick={() => setQuery(term)}
                    className="project-tag"
                    style={{ cursor: 'pointer', background: 'var(--bg-tertiary)', border: '1px solid var(--border-medium)', color: 'var(--text-secondary)' }}
                  >
                    {term}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
