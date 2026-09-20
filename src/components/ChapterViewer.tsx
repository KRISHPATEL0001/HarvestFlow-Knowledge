import React from 'react';
import type { Chapter } from '../types/content';
import { EvidenceBadge } from './EvidenceBadge';
import { Breadcrumbs } from './Breadcrumbs';
import { getAdjacentChapters } from '../data/chapters';
import { ProblemJourneyDiagram } from './Diagrams/ProblemJourneyDiagram';
import { CoreLoopDiagram } from './Diagrams/CoreLoopDiagram';
import { ArchitectureDiagram, QueueStateMachineDiagram } from './Diagrams/ArchitectureDiagram';
import { DisruptionFlowDiagram, CapacityModelInteractive } from './Diagrams/DisruptionFlowDiagram';
import { SourceOfTruthTable, FarmerJourneyStepper } from './Diagrams/SourceOfTruthTable';
import { OneActionEffectsDiagram, QualityBranchDiagram, PaymentLifecycleDiagram } from './Diagrams/OneActionEffectsDiagram';
import { WhyAccordion } from './WhyAccordion';

interface Props {
  chapter: Chapter;
  onNavigateChapter: (chapterId: string) => void;
  onNavigateHome: () => void;
}

const formatInline = (str: string): string => {
  return str
    .replace(/\*\*(.*?)\*\*/g, '<strong style="color: #f8fafc">$1</strong>')
    .replace(/\*(.*?)\*/g, '<em>$1</em>')
    .replace(/`([^`]+)`/g, '<code style="color: #38bdf8; background: rgba(255,255,255,0.08); padding: 0.1rem 0.35rem; border-radius: 4px; font-family: var(--font-mono); font-size: 0.88em;">$1</code>')
    .replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" target="_blank" rel="noopener noreferrer" style="color: #34d399; text-decoration: underline; text-underline-offset: 3px;">$1 ↗</a>');
};

export const ChapterViewer: React.FC<Props> = ({
  chapter,
  onNavigateChapter,
  onNavigateHome
}) => {
  const { prev, next } = getAdjacentChapters(chapter.id);

  // Helper to render diagrams based on diagramId
  const renderDiagram = (id?: string) => {
    switch (id) {
      case 'problem-journey':
        return <ProblemJourneyDiagram />;
      case 'core-loop':
        return <CoreLoopDiagram />;
      case 'architecture-diagram':
        return <ArchitectureDiagram />;
      case 'queue-state-machine':
        return <QueueStateMachineDiagram />;
      case 'disruption-flow':
        return <DisruptionFlowDiagram />;
      case 'capacity-model-interactive':
        return <CapacityModelInteractive />;
      case 'source-of-truth-table':
        return <SourceOfTruthTable />;
      case 'farmer-journey-stepper':
        return <FarmerJourneyStepper />;
      case 'one-action-effects':
        return <OneActionEffectsDiagram />;
      case 'quality-branch-diagram':
        return <QualityBranchDiagram />;
      case 'payment-lifecycle-diagram':
        return <PaymentLifecycleDiagram />;
      default:
        return null;
    }
  };

  // Helper to format markdown (paragraphs, bold, quotes, lists, code, tables)
  const renderMarkdown = (text: string) => {
    const lines = text.split('\n');
    const elements: React.ReactNode[] = [];
    let inList = false;
    let listType: 'ul' | 'ol' = 'ul';
    let listItems: string[] = [];
    let inPre = false;
    let preContent: string[] = [];
    let inTable = false;
    let tableHeader: string[] | null = null;
    let tableRows: string[][] = [];

    const flushList = () => {
      if (inList && listItems.length > 0) {
        if (listType === 'ol') {
          elements.push(
            <ol key={`ol-${elements.length}`} style={{ margin: '0.75rem 0 1.25rem 1.5rem', color: '#cbd5e1' }}>
              {listItems.map((li, idx) => (
                <li key={idx} style={{ marginBottom: '0.35rem' }} dangerouslySetInnerHTML={{ __html: formatInline(li) }} />
              ))}
            </ol>
          );
        } else {
          elements.push(
            <ul key={`ul-${elements.length}`} style={{ margin: '0.75rem 0 1.25rem 1.5rem', color: '#cbd5e1' }}>
              {listItems.map((li, idx) => (
                <li key={idx} style={{ marginBottom: '0.35rem' }} dangerouslySetInnerHTML={{ __html: formatInline(li) }} />
              ))}
            </ul>
          );
        }
        listItems = [];
        inList = false;
      }
    };

    const flushPre = () => {
      if (inPre && preContent.length > 0) {
        elements.push(
          <pre key={`pre-${elements.length}`}>
            <code>{preContent.join('\n')}</code>
          </pre>
        );
        preContent = [];
        inPre = false;
      }
    };

    const flushTable = () => {
      if (inTable && (tableHeader || tableRows.length > 0)) {
        const headers = tableHeader || (tableRows.length > 0 ? tableRows[0] : []);
        const rows = tableHeader ? tableRows : tableRows.slice(1);
        elements.push(
          <div key={`table-${elements.length}`} className="table-container">
            <table className="styled-table">
              {headers && headers.length > 0 && (
                <thead>
                  <tr>
                    {headers.map((h, i) => (
                      <th key={i} dangerouslySetInnerHTML={{ __html: formatInline(h) }} />
                    ))}
                  </tr>
                </thead>
              )}
              <tbody>
                {rows.map((row, rIdx) => (
                  <tr key={rIdx}>
                    {row.map((cell, cIdx) => (
                      <td key={cIdx} dangerouslySetInnerHTML={{ __html: formatInline(cell) }} />
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        );
        tableHeader = null;
        tableRows = [];
        inTable = false;
      }
    };

    lines.forEach((line, index) => {
      const trimmed = line.trim();

      // Check if line is a table row
      if (trimmed.startsWith('|') && trimmed.endsWith('|') && trimmed.length > 1) {
        flushList();
        flushPre();
        inTable = true;

        // Check if it's a separator line like |---|---|
        if (/^\|[\s\-:|]+\|$/.test(trimmed)) {
          if (tableRows.length > 0 && !tableHeader) {
            tableHeader = tableRows[0];
            tableRows = [];
          }
          return;
        }

        // Split cells
        const cells = trimmed
          .slice(1, -1)
          .split(/(?<!\\)\|/)
          .map(c => c.replace(/\\\|/g, '|').trim());

        tableRows.push(cells);
        return;
      }

      // If we were in a table and this line is not a table row, flush table
      flushTable();

      if (line.startsWith('```')) {
        if (inPre) {
          flushPre();
        } else {
          flushList();
          inPre = true;
        }
        return;
      }

      if (inPre) {
        preContent.push(line);
        return;
      }

      if (line.startsWith('### ')) {
        flushList();
        elements.push(
          <h3 key={`h3-${index}`} style={{ fontFamily: 'var(--font-display)', fontSize: '1.25rem', fontWeight: 600, color: 'var(--text-primary)', margin: '1.75rem 0 0.5rem' }}>
            {line.replace('### ', '')}
          </h3>
        );
        return;
      }

      if (line.startsWith('#### ')) {
        flushList();
        elements.push(
          <h4 key={`h4-${index}`} style={{ fontSize: '1.05rem', fontWeight: 600, color: 'var(--accent-emerald-light)', margin: '1.25rem 0 0.4rem' }}>
            {line.replace('#### ', '')}
          </h4>
        );
        return;
      }

      if (line.startsWith('> ')) {
        flushList();
        elements.push(
          <blockquote
            key={`bq-${index}`}
            style={{
              borderLeft: '3px solid var(--accent-emerald)',
              padding: '0.75rem 1.25rem',
              margin: '1.25rem 0',
              background: 'var(--accent-emerald-dim)',
              borderRadius: '0 8px 8px 0',
              color: '#e2e8f0',
              fontStyle: 'italic'
            }}
            dangerouslySetInnerHTML={{ __html: formatInline(line.replace('> ', '')) }}
          />
        );
        return;
      }

      if (line.startsWith('- ') || line.startsWith('• ')) {
        if (inList && listType !== 'ul') {
          flushList();
        }
        inList = true;
        listType = 'ul';
        listItems.push(line.replace(/^[-•]\s*/, ''));
        return;
      }

      if (/^\d+\.\s/.test(line)) {
        if (inList && listType !== 'ol') {
          flushList();
        }
        inList = true;
        listType = 'ol';
        listItems.push(line.replace(/^\d+\.\s*/, ''));
        return;
      }

      flushList();

      if (trimmed === '') {
        return;
      }

      elements.push(
        <p key={`p-${index}`} style={{ marginBottom: '1rem', color: '#cbd5e1', lineHeight: 1.75 }} dangerouslySetInnerHTML={{ __html: formatInline(line) }} />
      );
    });

    flushList();
    flushPre();
    flushTable();

    return elements;
  };

  return (
    <div className="content-inner">
      <Breadcrumbs
        items={[
          { label: 'HarvestFlow Knowledge Base', onClick: onNavigateHome },
          { label: chapter.category },
          { label: `Chapter ${chapter.number}: ${chapter.shortTitle}` }
        ]}
      />

      <header className="chapter-header">
        <div className="chapter-badge-row">
          <span className="chapter-number-tag">CHAPTER {chapter.number}</span>
          <EvidenceBadge type={chapter.primaryEvidence} />
          <span className="reading-time-tag">⏱️ {chapter.readingMinutes} min read</span>
          <span className="chapter-source-tag">SOURCE: {chapter.sourceSections}</span>
        </div>

        <h1 className="chapter-title">{chapter.title}</h1>
        <p className="chapter-subtitle">{chapter.subtitle}</p>
      </header>

      <main>
        {chapter.sections.map((section) => (
          <article key={section.id} id={section.id} className="section-block">
            <div className="section-heading">
              <span>{section.title}</span>
              {section.evidenceType && (
                <EvidenceBadge type={section.evidenceType} />
              )}
            </div>

            <div className="prose">
              {renderMarkdown(section.markdown)}
            </div>

            {section.callout && (
              <div className={`callout-box ${section.callout.type}`}>
                <div className="callout-title">
                  <span>
                    {section.callout.type === 'NOTE' && 'ℹ️ NOTE'}
                    {section.callout.type === 'IMPORTANT' && '⭐ IMPORTANT'}
                    {section.callout.type === 'WARNING' && '⚠️ WARNING'}
                    {section.callout.type === 'RULE' && '🛡️ NON-NEGOTIABLE RULE'}
                    {section.callout.type === 'HYPOTHESIS' && '🔬 PILOT HYPOTHESIS'}
                  </span>
                  <span>— {section.callout.title}</span>
                </div>
                <div className="callout-content">
                  {section.callout.content}
                </div>
              </div>
            )}

            {section.table && (
              <div className="table-container">
                <table className="styled-table">
                  <thead>
                    <tr>
                      {section.table.headers.map((h, idx) => (
                        <th key={idx} dangerouslySetInnerHTML={{ __html: formatInline(h) }} />
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {section.table.rows.map((row, rIdx) => (
                      <tr key={rIdx}>
                        {row.map((cell, cIdx) => (
                          <td key={cIdx} dangerouslySetInnerHTML={{ __html: formatInline(cell) }} />
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}

            {section.diagramId && renderDiagram(section.diagramId)}

            {section.whyAccordionId && (
              <WhyAccordion whyId={section.whyAccordionId} />
            )}
          </article>
        ))}
      </main>

      {/* Prev / Next Page Navigation */}
      <nav className="prev-next-nav" aria-label="Chapter Navigation">
        {prev ? (
          <div
            className="nav-card"
            onClick={() => onNavigateChapter(prev.id)}
            role="button"
            tabIndex={0}
          >
            <span className="nav-direction-label">← Previous Chapter</span>
            <span className="nav-chapter-title">
              Chapter {prev.number}: {prev.shortTitle}
            </span>
          </div>
        ) : (
          <div style={{ flex: 1 }} />
        )}

        {next ? (
          <div
            className="nav-card"
            onClick={() => onNavigateChapter(next.id)}
            role="button"
            tabIndex={0}
            style={{ textAlign: 'right' }}
          >
            <span className="nav-direction-label">Next Chapter →</span>
            <span className="nav-chapter-title">
              Chapter {next.number}: {next.shortTitle}
            </span>
          </div>
        ) : (
          <div style={{ flex: 1 }} />
        )}
      </nav>
    </div>
  );
};
