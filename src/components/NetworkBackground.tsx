import { useRef, useMemo, useEffect, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import * as THREE from 'three';

function createGlowTexture() {
    const canvas = document.createElement('canvas');
    canvas.width = 32;
    canvas.height = 32;
    const ctx = canvas.getContext('2d');
    if (ctx) {
        const gradient = ctx.createRadialGradient(16, 16, 0, 16, 16, 16);
        gradient.addColorStop(0, 'rgba(255, 255, 255, 1)');
        gradient.addColorStop(0.2, 'rgba(255, 255, 255, 0.8)');
        gradient.addColorStop(0.5, 'rgba(255, 255, 255, 0.2)');
        gradient.addColorStop(1, 'rgba(255, 255, 255, 0)');
        ctx.fillStyle = gradient;
        ctx.fillRect(0, 0, 32, 32);
    }
    const texture = new THREE.CanvasTexture(canvas);
    return texture;
}

interface DualParticlesProps {
    isMobile: boolean;
    prefersReducedMotion: boolean;
    mouse: React.MutableRefObject<{ x: number; y: number }>;
}

function DualParticleGlobe({ isMobile, prefersReducedMotion, mouse }: DualParticlesProps) {
    const refOuter = useRef<THREE.Points>(null);
    const refInner = useRef<THREE.Points>(null);

    const outerCount = isMobile ? 800 : 2500;
    const innerCount = isMobile ? 400 : 1200;

    const outerPositions = useMemo(() => {
        return generateSpherePositions(outerCount, 2.5, 0.3);
    }, [outerCount]);

    const innerPositions = useMemo(() => {
        return generateSpherePositions(innerCount, 1.2, 0.15);
    }, [innerCount]);

    const glowTexture = useMemo(() => createGlowTexture(), []);

    const targetRotationX = useRef(0);
    const targetRotationY = useRef(0);

    useFrame((state, delta) => {
        // Base rotations over time (very slow and elegant)
        const time = state.clock.getElapsedTime();
        const baseSpeedOuter = prefersReducedMotion ? 0.01 : 0.05;
        const baseSpeedInner = prefersReducedMotion ? -0.015 : -0.07;

        if (refOuter.current) {
            refOuter.current.rotation.y += delta * baseSpeedOuter;
            refOuter.current.rotation.x = Math.sin(time * 0.08) * 0.03;
        }
        if (refInner.current) {
            refInner.current.rotation.y += delta * baseSpeedInner;
            refInner.current.rotation.x = Math.cos(time * 0.1) * 0.04;
        }

        // Parallax offset
        if (!prefersReducedMotion) {
            targetRotationX.current = mouse.current.y * 0.15;
            targetRotationY.current = mouse.current.x * 0.15;

            if (refOuter.current) {
                // Smooth interpolation (lerp)
                refOuter.current.rotation.x += (targetRotationX.current - refOuter.current.rotation.x) * 0.04;
                refOuter.current.rotation.y += (targetRotationY.current - refOuter.current.rotation.y) * 0.04;
            }

            if (refInner.current) {
                // Inner core rotates opposite to the mouse tilt for counter-depth
                refInner.current.rotation.x += (-targetRotationX.current - refInner.current.rotation.x) * 0.06;
                refInner.current.rotation.y += (-targetRotationY.current - refInner.current.rotation.y) * 0.06;
            }
        }
    });

    return (
        <group>
            {/* Outer Amber Field */}
            <Points ref={refOuter} positions={outerPositions} stride={3} frustumCulled={false}>
                <PointMaterial
                    transparent
                    color="#f59e0b" // amber-500
                    size={isMobile ? 0.045 : 0.055}
                    sizeAttenuation={true}
                    depthWrite={false}
                    map={glowTexture}
                    blending={THREE.AdditiveBlending}
                    opacity={0.75}
                />
            </Points>

            {/* Inner Gold/Dark Amber Core */}
            <Points ref={refInner} positions={innerPositions} stride={3} frustumCulled={false}>
                <PointMaterial
                    transparent
                    color="#d97706" // amber-600
                    size={isMobile ? 0.03 : 0.04}
                    sizeAttenuation={true}
                    depthWrite={false}
                    map={glowTexture}
                    blending={THREE.AdditiveBlending}
                    opacity={0.85}
                />
            </Points>
        </group>
    );
}

function generateSpherePositions(count: number, radius: number, depth: number) {
    const positions = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
        const theta = Math.random() * 2 * Math.PI;
        const phi = Math.acos(2 * Math.random() - 1);
        const r = radius + (Math.random() - 0.5) * depth;

        positions[i * 3] = r * Math.sin(phi) * Math.cos(theta);
        positions[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
        positions[i * 3 + 2] = r * Math.cos(phi);
    }
    return positions;
}

const NetworkBackground = () => {
    const mouse = useRef({ x: 0, y: 0 });
    const [isMobile, setIsMobile] = useState(false);
    const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

    useEffect(() => {
        const handlePointerMove = (event: PointerEvent) => {
            // Normalized cursor coordinates (-1 to 1)
            mouse.current.x = (event.clientX / window.innerWidth) * 2 - 1;
            mouse.current.y = -(event.clientY / window.innerHeight) * 2 + 1;
        };

        window.addEventListener('pointermove', handlePointerMove);

        // Responsive & reduced motion checks
        const mobileMediaQuery = window.matchMedia('(max-width: 768px)');
        const motionMediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');

        setIsMobile(mobileMediaQuery.matches);
        setPrefersReducedMotion(motionMediaQuery.matches);

        const handleMobileChange = (e: MediaQueryListEvent) => setIsMobile(e.matches);
        const handleMotionChange = (e: MediaQueryListEvent) => setPrefersReducedMotion(e.matches);

        mobileMediaQuery.addEventListener('change', handleMobileChange);
        motionMediaQuery.addEventListener('change', handleMotionChange);

        return () => {
            window.removeEventListener('pointermove', handlePointerMove);
            mobileMediaQuery.removeEventListener('change', handleMobileChange);
            motionMediaQuery.removeEventListener('change', handleMotionChange);
        };
    }, []);

    return (
        <div className="fixed inset-0 z-0 h-full w-full overflow-hidden pointer-events-none" style={{ backgroundColor: 'var(--background)' }}>
            {/* Aurora Background Blobs */}
            <div className="aurora-container">
                <div className="aurora-blob aurora-blob-1" />
                <div className="aurora-blob aurora-blob-2" />
                <div className="aurora-blob aurora-blob-3" />
            </div>

            {/* Canvas for Particles */}
            <Canvas
                camera={{ position: [0, 0, 4.5], fov: 60 }}
                dpr={[1, 2]} // Clamp dpr for performance
                gl={{ alpha: true, antialias: false }} // Optimize for performance
            >
                <fog attach="fog" args={['#0c0c0f', 5, 15]} />
                <DualParticleGlobe isMobile={isMobile} prefersReducedMotion={prefersReducedMotion} mouse={mouse} />
                <ambientLight intensity={0.6} />
            </Canvas>
        </div>
    );
};

export default NetworkBackground;
