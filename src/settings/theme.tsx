import React, { createContext, useContext, useEffect, useState } from 'react';

interface ThemeContextType {
  isDarkMode: boolean;
  toggleDarkMode: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

// eslint-disable-next-line react-refresh/only-export-components
export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [isInitialized, setIsInitialized] = useState(false);

  useEffect(() => {
    // Always default to dark mode
    const initialTheme = true;
    setIsDarkMode(initialTheme);
    
    // Apply theme to document immediately and ensure it's applied
    const htmlElement = document.documentElement;
    htmlElement.classList.add('dark');
    htmlElement.setAttribute('data-theme', 'dark');
    
    // Also apply to body for additional specificity
    document.body.classList.add('dark');
    
    setIsInitialized(true);
  }, []);

  const toggleDarkMode = () => {
    // Keep theme dark
    setIsDarkMode(true);
    localStorage.setItem('theme', 'dark');
    const htmlElement = document.documentElement;
    htmlElement.classList.add('dark');
    htmlElement.setAttribute('data-theme', 'dark');
    document.body.classList.add('dark');
  };

  // Don't render children until theme is initialized
  if (!isInitialized) {
    return null;
  }

  return (
    <ThemeContext.Provider value={{ isDarkMode, toggleDarkMode }}>
      {children}
    </ThemeContext.Provider>
  );
};
