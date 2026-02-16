'use client';

import { useRef, useMemo, useEffect } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import { useMousePosition } from '@/hooks';

const PARTICLE_COUNT = 800;

export function ParticleField() {
  const meshRef = useRef<THREE.Points>(null);
  const mousePos = useMousePosition();

  const { positions, originalPositions } = useMemo(() => {
    const positions = new Float32Array(PARTICLE_COUNT * 3);
    const originalPositions = new Float32Array(PARTICLE_COUNT * 3);

    for (let i = 0; i < PARTICLE_COUNT; i++) {
      const x = (Math.random() - 0.5) * 20;
      const y = (Math.random() - 0.5) * 20;
      const z = (Math.random() - 0.5) * 10;
      positions[i * 3] = x;
      positions[i * 3 + 1] = y;
      positions[i * 3 + 2] = z;
      originalPositions[i * 3] = x;
      originalPositions[i * 3 + 1] = y;
      originalPositions[i * 3 + 2] = z;
    }
    return { positions, originalPositions };
  }, []);

  useFrame((state) => {
    if (!meshRef.current) return;
    const time = state.clock.getElapsedTime();
    const mouseX = (mousePos.x / window.innerWidth - 0.5) * 2;
    const mouseY = -(mousePos.y / window.innerHeight - 0.5) * 2;

    const posArray = meshRef.current.geometry.attributes.position.array as Float32Array;
    for (let i = 0; i < PARTICLE_COUNT; i++) {
      const ox = originalPositions[i * 3];
      const oy = originalPositions[i * 3 + 1];
      const oz = originalPositions[i * 3 + 2];

      const dx = ox - mouseX * 5;
      const dy = oy - mouseY * 5;
      const dist = Math.sqrt(dx * dx + dy * dy);
      const force = Math.max(0, 1 - dist / 8);
      const displacement = force * 1.5;

      posArray[i * 3] = ox + Math.sin(time + i * 0.01) * 0.3 + dx * displacement * 0.1;
      posArray[i * 3 + 1] = oy + Math.cos(time * 0.7 + i * 0.02) * 0.3 + dy * displacement * 0.1;
      posArray[i * 3 + 2] = oz + Math.sin(time * 0.5 + i * 0.03) * 0.5;
    }
    meshRef.current.geometry.attributes.position.needsUpdate = true;
  });

  return (
    <points ref={meshRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={PARTICLE_COUNT}
          array={positions}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.04}
        color="#a78bfa"
        transparent
        opacity={0.8}
        sizeAttenuation
        blending={THREE.AdditiveBlending}
        depthWrite={false}
      />
    </points>
  );
}
