import React, { useState, useEffect } from 'react';
import './styles/main.css';
import { ALL_CHAPTERS, getChapterById } from './data/chapters';
import { Header } from './components/Header';
import { Sidebar } from './components/Sidebar';
import { ChapterViewer } from './components/ChapterViewer';
import { GlossaryView } from './components/GlossaryView';
import { FaqView } from './components/FaqView';
import { WhyHubView } from './components/WhyHubView';
import { ExclusionsView } from './components/ExclusionsView';
import { SourcesView } from './components/SourcesView';
import { SearchModal } from './components/SearchModal';

export const App: React.FC = () => {
  const [currentChapterId, setCurrentChapterId] = useState<string>('00-overview');
  const [currentSpecialView, setCurrentSpecialView] = useState<'glossary' | 'faq' | 'why' | 'exclusions' | 'sources' | null>(null);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [readingProgress, setReadingProgress] = useState(0);

  // Sync state with URL hash on mount & hashchange
  useEffect(() => {
    const handleHash = () => {
      const hash = window.location.hash.replace(/^#\/?/, '');
      if (['glossary', 'faq', 'why', 'exclusions', 'sources'].includes(hash)) {
        setCurrentSpecialView(hash as any);
      } else if (hash) {
        const found = getChapterById(hash);
        if (found) {
          setCurrentChapterId(found.id);
          setCurrentSpecialView(null);
        }
      }
    };

    handleHash();
    window.addEventListener('hashchange', handleHash);
    return () => window.removeEventListener('hashchange', handleHash);
  }, []);

  // Track scroll position for reading progress bar
  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        const progress = (window.scrollY / totalHeight) * 100;
        setReadingProgress(progress);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Global keyboard shortcut: Ctrl+K / Cmd+K for search
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault();
        setIsSearchOpen(prev => !prev);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const navigateToChapter = (id: string) => {
    setCurrentChapterId(id);
    setCurrentSpecialView(null);
    window.location.hash = `#/${id}`;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navigateToSpecialView = (view: 'glossary' | 'faq' | 'why' | 'exclusions' | 'sources') => {
    setCurrentSpecialView(view);
    window.location.hash = `#/${view}`;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentChapter = getChapterById(currentChapterId) || ALL_CHAPTERS[0];

  return (
    <div className="app-container">
      <Header
        onOpenSearch={() => setIsSearchOpen(true)}
        onToggleMobileMenu={() => setIsMobileMenuOpen(prev => !prev)}
        onNavigateHome={() => navigateToChapter('00-overview')}
        onNavigateGlossary={() => navigateToSpecialView('glossary')}
        onNavigateFaq={() => navigateToSpecialView('faq')}
        onNavigateWhy={() => navigateToSpecialView('why')}
        readingProgress={readingProgress}
      />

      <div className="main-layout">
        <Sidebar
          currentChapterId={currentChapterId}
          currentSpecialView={currentSpecialView}
          onSelectChapter={navigateToChapter}
          onSelectSpecialView={navigateToSpecialView}
          isOpenMobile={isMobileMenuOpen}
          onCloseMobile={() => setIsMobileMenuOpen(false)}
        />

        {isMobileMenuOpen && (
          <div
            className="mobile-backdrop"
            onClick={() => setIsMobileMenuOpen(false)}
            aria-hidden="true"
          />
        )}

        <main className="content-wrapper">
          {currentSpecialView === 'glossary' && (
            <GlossaryView onNavigateHome={() => navigateToChapter('00-overview')} />
          )}

          {currentSpecialView === 'faq' && (
            <FaqView onNavigateHome={() => navigateToChapter('00-overview')} />
          )}

          {currentSpecialView === 'why' && (
            <WhyHubView onNavigateHome={() => navigateToChapter('00-overview')} />
          )}

          {currentSpecialView === 'exclusions' && (
            <ExclusionsView onNavigateHome={() => navigateToChapter('00-overview')} />
          )}

          {currentSpecialView === 'sources' && (
            <SourcesView onNavigateHome={() => navigateToChapter('00-overview')} />
          )}

          {!currentSpecialView && (
            <ChapterViewer
              chapter={currentChapter}
              onNavigateChapter={navigateToChapter}
              onNavigateHome={() => navigateToChapter('00-overview')}
            />
          )}
        </main>
      </div>

      <SearchModal
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
        onSelectChapter={navigateToChapter}
        onSelectGlossary={() => navigateToSpecialView('glossary')}
        onSelectFaq={() => navigateToSpecialView('faq')}
        onSelectWhy={() => navigateToSpecialView('why')}
        onSelectExclusions={() => navigateToSpecialView('exclusions')}
        onSelectSources={() => navigateToSpecialView('sources')}
      />
    </div>
  );
};

export default App;
