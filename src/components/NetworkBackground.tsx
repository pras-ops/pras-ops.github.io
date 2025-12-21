
import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import * as THREE from 'three';

function ParticleGlobe(props: any) {
    const ref = useRef<THREE.Points>(null);

    // Generate points on a sphere
    const particles = useMemo(() => {
        const count = 3000;
        const positions = new Float32Array(count * 3);
        const radius = 2;

        for (let i = 0; i < count; i++) {
            const theta = Math.random() * 2 * Math.PI;
            const phi = Math.acos(2 * Math.random() - 1);

            const x = radius * Math.sin(phi) * Math.cos(theta);
            const y = radius * Math.sin(phi) * Math.sin(theta);
            const z = radius * Math.cos(phi);

            positions[i * 3] = x;
            positions[i * 3 + 1] = y;
            positions[i * 3 + 2] = z;
        }
        return positions;
    }, []);

    useFrame((state, delta) => {
        if (ref.current) {
            ref.current.rotation.y += delta * 0.1;
            ref.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.2) * 0.1;
        }
    });

    return (
        <group rotation={[0, 0, Math.PI / 6]}>
            <Points ref={ref} positions={particles} stride={3} frustumCulled={false} {...props}>
                <PointMaterial
                    transparent
                    color="#38bdf8" // Sky 400 - Neon Blue
                    size={0.015}
                    sizeAttenuation={true}
                    depthWrite={false}
                    opacity={0.8}
                />
            </Points>
        </group>
    );
}

const NetworkBackground = () => {
    return (
        <div className="absolute inset-0 z-0 h-full w-full bg-[#020617]">
            <Canvas camera={{ position: [0, 0, 4.5], fov: 60 }}>
                <fog attach="fog" args={['#020617', 5, 15]} />
                <ParticleGlobe />
                <ambientLight intensity={0.5} />
            </Canvas>
        </div>
    );
};

export default NetworkBackground;
