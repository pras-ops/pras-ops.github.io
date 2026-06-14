import React, { useRef, useState, useEffect } from 'react';
import { motion, useMotionValue, useSpring, useMotionTemplate, HTMLMotionProps } from 'framer-motion';

interface TiltCardProps extends Omit<HTMLMotionProps<'div'>, 'ref'> {
  children: React.ReactNode;
  maxRotation?: number; // max tilt in degrees
  glow?: boolean; // show cursor spotlight
}

export const TiltCard: React.FC<TiltCardProps> = ({
  children,
  className = '',
  maxRotation = 6,
  glow = true,
  style,
  ...props
}) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [enabled, setEnabled] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  // Only enable tilt on devices with a fine pointer and no reduced-motion preference
  useEffect(() => {
    const finePointer = window.matchMedia('(hover: hover) and (pointer: fine)');
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)');
    const update = () => setEnabled(finePointer.matches && !reduced.matches);
    update();
    finePointer.addEventListener('change', update);
    reduced.addEventListener('change', update);
    return () => {
      finePointer.removeEventListener('change', update);
      reduced.removeEventListener('change', update);
    };
  }, []);

  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springConfig = { damping: 20, stiffness: 200, mass: 0.4 };
  const rotateX = useSpring(x, springConfig);
  const rotateY = useSpring(y, springConfig);

  const spotlightX = useMotionValue(50);
  const spotlightY = useMotionValue(50);
  const spotlightBg = useMotionTemplate`radial-gradient(360px circle at ${spotlightX}px ${spotlightY}px, color-mix(in oklch, var(--primary) 16%, transparent), transparent 75%)`;

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current || !enabled) return;
    const rect = cardRef.current.getBoundingClientRect();
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / rect.width - 0.5;
    const yPct = mouseY / rect.height - 0.5;
    x.set(-yPct * maxRotation);
    y.set(xPct * maxRotation);
    spotlightX.set(mouseX);
    spotlightY.set(mouseY);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    x.set(0);
    y.set(0);
  };

  if (!enabled) {
    return (
      <div className={`relative ${className}`} style={style} {...(props as any)}>
        {children}
      </div>
    );
  }

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformPerspective: 1000, // perspective must live on the transformed element's own transform
        transformStyle: 'preserve-3d',
        ...style,
      }}
      className={`relative overflow-hidden ${className}`}
      {...props}
    >
      {glow && (
        <motion.div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 z-10 transition-opacity duration-300"
          style={{
            background: spotlightBg,
            opacity: isHovered ? 1 : 0,
            borderRadius: 'inherit',
          }}
        />
      )}
      <div className="relative z-0" style={{ transform: 'translateZ(40px)', transformStyle: 'preserve-3d' }}>
        {children}
      </div>
    </motion.div>
  );
};

export default TiltCard;
