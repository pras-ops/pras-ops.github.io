import { useMemo } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PortfolioPage from './components/generated/PortfolioPage';
import TranscriptExtractorPage from './components/TranscriptExtractorPage';
import { ThemeProvider } from './settings/theme';

function App() {
  const generatedComponent = useMemo(() => {
    return (
      <ThemeProvider>
        <Router>
          <Routes>
            <Route path="/" element={<PortfolioPage />} />
            <Route path="/transcript-extractor" element={<TranscriptExtractorPage />} />
          </Routes>
        </Router>
      </ThemeProvider>
    );
  }, []);

  return generatedComponent;
}

export default App;
