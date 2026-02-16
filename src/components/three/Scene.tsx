'use client';

import { Canvas } from '@react-three/fiber';
import { ParticleField } from './ParticleField';
import { GradientBackground } from './GradientBackground';

export function ThreeScene() {
  return (
    <div className="fixed inset-0 -z-10 h-screen w-screen">
      <Canvas
        camera={{ position: [0, 0, 5], fov: 60 }}
        dpr={[1, 2]}
        gl={{
          alpha: true,
          antialias: true,
          powerPreference: 'high-performance',
        }}
      >
        <color attach="background" args={['#050508']} />
        <ambientLight intensity={0.3} />
        <pointLight position={[10, 10, 10]} intensity={0.5} color="#a78bfa" />
        <GradientBackground />
        <ParticleField />
      </Canvas>
    </div>
  );
}
