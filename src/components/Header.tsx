import React from 'react';

interface Props {
  onOpenSearch: () => void;
  onToggleMobileMenu: () => void;
  onNavigateHome: () => void;
  onNavigateGlossary: () => void;
  onNavigateFaq: () => void;
  onNavigateWhy: () => void;
  readingProgress: number;
}

export const Header: React.FC<Props> = ({
  onOpenSearch,
  onToggleMobileMenu,
  onNavigateHome,
  onNavigateGlossary,
  onNavigateFaq,
  onNavigateWhy,
  readingProgress
}) => {
  return (
    <header className="top-header">
      <div className="header-left">
        <button
          className="mobile-menu-btn"
          onClick={onToggleMobileMenu}
          aria-label="Toggle navigation menu"
        >
          ☰
        </button>

        <div className="brand-badge-group" onClick={onNavigateHome}>
          <span className="brand-logo">HarvestFlow</span>
          <span className="project-tag">SIH26032</span>
          <span className="explanation-watermark">EXPLANATION SITE</span>
        </div>
      </div>

      <div className="header-center">
        <button
          className="header-search-trigger"
          onClick={onOpenSearch}
          aria-label="Open global search"
        >
          <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <span>🔍</span>
            <span>Search 21 chapters, glossary, FAQs, why?...</span>
          </span>
          <span className="kbd-shortcut">Ctrl K</span>
        </button>
      </div>

      <div className="header-right">
        <button className="header-nav-link" onClick={onNavigateGlossary}>
          Glossary
        </button>
        <button className="header-nav-link" onClick={onNavigateFaq}>
          FAQ / Jury
        </button>
        <button className="header-nav-link" onClick={onNavigateWhy}>
          Why?
        </button>
      </div>

      {/* Real-time reading progress bar */}
      <div
        className="reading-progress-bar"
        style={{ width: `${Math.min(100, Math.max(0, readingProgress))}%` }}
        aria-hidden="true"
      />
    </header>
  );
};
