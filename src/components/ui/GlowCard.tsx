import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';

interface GlowCardProps extends React.ComponentPropsWithoutRef<typeof motion.div> {
  children: React.ReactNode;
}

export const GlowCard: React.FC<GlowCardProps> = ({ children, className = "", ...props }) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`relative overflow-hidden ${className}`}
      {...props}
    >
      <div
        className="pointer-events-none absolute -inset-px transition-opacity duration-300"
        style={{
          opacity: isHovered ? 1 : 0,
          background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(56, 189, 248, 0.1), transparent 40%)`,
        }}
      />
      {children}
    </motion.div>
  );
};

export default GlowCard;
