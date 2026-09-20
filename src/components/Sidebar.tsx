import React from 'react';
import { ALL_CHAPTERS } from '../data/chapters';

interface Props {
  currentChapterId: string;
  currentSpecialView: string | null;
  onSelectChapter: (id: string) => void;
  onSelectSpecialView: (view: 'glossary' | 'faq' | 'why' | 'exclusions' | 'sources') => void;
  isOpenMobile: boolean;
  onCloseMobile: () => void;
}

export const Sidebar: React.FC<Props> = ({
  currentChapterId,
  currentSpecialView,
  onSelectChapter,
  onSelectSpecialView,
  isOpenMobile,
  onCloseMobile
}) => {
  const categories: Array<{
    name: 'Foundation' | 'Problem & Systems' | 'Core Architecture' | 'Governance & AI' | 'Strategy & Reference';
    label: string;
  }> = [
    { name: 'Foundation', label: '00 — Foundation' },
    { name: 'Problem & Systems', label: '01 — Problem & Systems' },
    { name: 'Core Architecture', label: '02 — Core Architecture' },
    { name: 'Governance & AI', label: '03 — Governance & AI' },
    { name: 'Strategy & Reference', label: '04 — Strategy & Reference' }
  ];

  const handleChapterClick = (id: string) => {
    onSelectChapter(id);
    onCloseMobile();
  };

  const handleSpecialClick = (view: 'glossary' | 'faq' | 'why' | 'exclusions' | 'sources') => {
    onSelectSpecialView(view);
    onCloseMobile();
  };

  return (
    <aside className={`sidebar ${isOpenMobile ? 'open' : ''}`}>
      {/* Interactive Special Reference Sections */}
      <div>
        <div className="sidebar-category-title">Interactive Reference</div>
        <ul className="sidebar-nav-list">
          <li>
            <div
              className={`sidebar-nav-item ${currentSpecialView === 'glossary' ? 'active' : ''}`}
              onClick={() => handleSpecialClick('glossary')}
              role="button"
              tabIndex={0}
            >
              <span>📖</span>
              <span className="sidebar-item-title">Canonical Glossary (27)</span>
            </div>
          </li>
          <li>
            <div
              className={`sidebar-nav-item ${currentSpecialView === 'faq' ? 'active' : ''}`}
              onClick={() => handleSpecialClick('faq')}
              role="button"
              tabIndex={0}
            >
              <span>🎯</span>
              <span className="sidebar-item-title">FAQ & Jury Cheatsheet (22)</span>
            </div>
          </li>
          <li>
            <div
              className={`sidebar-nav-item ${currentSpecialView === 'why' ? 'active' : ''}`}
              onClick={() => handleSpecialClick('why')}
              role="button"
              tabIndex={0}
            >
              <span>💡</span>
              <span className="sidebar-item-title">The 17 Why? Explanations</span>
            </div>
          </li>
          <li>
            <div
              className={`sidebar-nav-item ${currentSpecialView === 'exclusions' ? 'active' : ''}`}
              onClick={() => handleSpecialClick('exclusions')}
              role="button"
              tabIndex={0}
            >
              <span>🚫</span>
              <span className="sidebar-item-title">16 Excluded Features</span>
            </div>
          </li>
          <li>
            <div
              className={`sidebar-nav-item ${currentSpecialView === 'sources' ? 'active' : ''}`}
              onClick={() => handleSpecialClick('sources')}
              role="button"
              tabIndex={0}
            >
              <span>🔗</span>
              <span className="sidebar-item-title">Canonical Source Index</span>
            </div>
          </li>
        </ul>
      </div>

      {/* Chapters Grouped by Category */}
      {categories.map((cat) => {
        const chapters = ALL_CHAPTERS.filter((c) => c.category === cat.name);
        return (
          <div key={cat.name}>
            <div className="sidebar-category-title">{cat.label}</div>
            <ul className="sidebar-nav-list">
              {chapters.map((ch) => {
                const isActive = !currentSpecialView && currentChapterId === ch.id;
                return (
                  <li key={ch.id}>
                    <div
                      className={`sidebar-nav-item ${isActive ? 'active' : ''}`}
                      onClick={() => handleChapterClick(ch.id)}
                      role="button"
                      tabIndex={0}
                    >
                      <span className="sidebar-num-badge">{ch.number}</span>
                      <span className="sidebar-item-title">{ch.shortTitle}</span>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        );
      })}
    </aside>
  );
};
