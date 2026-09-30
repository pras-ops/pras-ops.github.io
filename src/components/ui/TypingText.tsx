import React, { useState, useEffect } from 'react';

interface TypingTextProps {
  texts: string[];
  typingSpeed?: number;
  deletingSpeed?: number;
  pauseTime?: number;
}

export const TypingText: React.FC<TypingTextProps> = ({
  texts,
  typingSpeed = 100,
  deletingSpeed = 50,
  pauseTime = 2000,
}) => {
  const [currentText, setCurrentText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const fullText = texts[currentIndex];
    
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        setCurrentText(fullText.substring(0, currentText.length + 1));
        if (currentText === fullText) {
          setTimeout(() => setIsDeleting(true), pauseTime);
        }
      } else {
        setCurrentText(fullText.substring(0, currentText.length - 1));
        if (currentText === '') {
          setIsDeleting(false);
          setCurrentIndex((prev) => (prev + 1) % texts.length);
        }
      }
    }, isDeleting ? deletingSpeed : typingSpeed);

    return () => clearTimeout(timeout);
  }, [currentText, isDeleting, currentIndex, texts, typingSpeed, deletingSpeed, pauseTime]);

  return (
    <span className="text-sky-400 font-semibold border-r-2 border-sky-400 animate-pulse pb-1">
      {currentText}
    </span>
  );
};

export default TypingText;
