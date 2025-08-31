import { StrictMode } from 'react';

// Force dark mode by adding dark class and preventing it from being removed
document.documentElement.classList.add('dark');

// Override the system preference detection
const forceDarkMode = () => {
  // Always set dark mode to true regardless of localStorage or system preference
  document.documentElement.classList.add('dark');
  // Also set localStorage to ensure consistency
  localStorage.setItem('theme', 'dark');
};

// Run immediately
forceDarkMode();

// Also run when the DOM is loaded to ensure it applies
document.addEventListener('DOMContentLoaded', forceDarkMode);

// Override system preference changes
const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
mediaQuery.addEventListener('change', forceDarkMode);

// Ensure dark mode persists even if other scripts try to change it
setInterval(() => {
  if (!document.documentElement.classList.contains('dark')) {
    document.documentElement.classList.add('dark');
  }
}, 100);
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.tsx';
createRoot(document.getElementById('root')!).render(<StrictMode>
    <App />
  </StrictMode>);