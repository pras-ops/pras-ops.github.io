import React, { createContext, useContext, useEffect, useState } from 'react';

interface ThemeContextType {
  isDarkMode: boolean;
  toggleDarkMode: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isInitialized, setIsInitialized] = useState(false);

  useEffect(() => {
    // Check if user has a saved preference
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    let initialTheme = false;
    
    if (savedTheme) {
      initialTheme = savedTheme === 'dark';
    } else {
      initialTheme = prefersDark;
    }
    
    setIsDarkMode(initialTheme);
    
    // Apply theme to document immediately and ensure it's applied
    const htmlElement = document.documentElement;
    if (initialTheme) {
      htmlElement.classList.add('dark');
      htmlElement.setAttribute('data-theme', 'dark');
    } else {
      htmlElement.classList.remove('dark');
      htmlElement.setAttribute('data-theme', 'light');
    }
    
    // Also apply to body for additional specificity
    document.body.classList.toggle('dark', initialTheme);
    
    setIsInitialized(true);
    
    // Debug logging
    console.log('ThemeProvider - Initialized theme:', { 
      savedTheme, 
      prefersDark, 
      initialTheme, 
      documentClass: htmlElement.classList.contains('dark'),
      bodyClass: document.body.classList.contains('dark')
    });
  }, []);

  const toggleDarkMode = () => {
    const newDarkMode = !isDarkMode;
    setIsDarkMode(newDarkMode);
    
    // Save theme preference
    localStorage.setItem('theme', newDarkMode ? 'dark' : 'light');
    
    // Apply theme to document with multiple methods for reliability
    const htmlElement = document.documentElement;
    if (newDarkMode) {
      htmlElement.classList.add('dark');
      htmlElement.setAttribute('data-theme', 'dark');
    } else {
      htmlElement.classList.remove('dark');
      htmlElement.setAttribute('data-theme', 'light');
    }
    
    // Also apply to body for additional specificity
    document.body.classList.toggle('dark', newDarkMode);
    
    // Debug logging
    console.log('ThemeProvider - Theme toggled:', { 
      from: isDarkMode, 
      to: newDarkMode, 
      documentClass: htmlElement.classList.contains('dark'),
      bodyClass: document.body.classList.contains('dark')
    });
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
