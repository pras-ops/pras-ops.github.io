import { useMemo, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import PortfolioPage from './components/generated/PortfolioPage';
import TranscriptExtractorPage from './components/TranscriptExtractorPage';
import BlogPostPage from './components/BlogPostPage';
import WebScrapingResiliencePage from './components/WebScrapingResiliencePage';
import StrategicScrapingPage from './components/StrategicScrapingPage';
import { ThemeProvider } from './settings/theme';

// Component to handle scroll to top on route change
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  const generatedComponent = useMemo(() => {
    return (
      <ThemeProvider>
        <Router>
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<PortfolioPage />} />
            <Route path="/transcript-extractor" element={<TranscriptExtractorPage />} />
            <Route path="/blog/chrome-web-store-review" element={<BlogPostPage />} />
            <Route path="/blog/web-scraping-resilience" element={<WebScrapingResiliencePage />} />
            <Route path="/blog/strategic-web-scraping" element={<StrategicScrapingPage />} />
          </Routes>
        </Router>
      </ThemeProvider>
    );
  }, []);

  return generatedComponent;
}

export default App;
