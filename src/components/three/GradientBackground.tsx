'use client';

import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

export function GradientBackground() {
  const meshRef = useRef<THREE.Mesh>(null);
  const materialRef = useRef<THREE.ShaderMaterial>(null);

  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    if (meshRef.current) meshRef.current.rotation.z = time * 0.05;
    if (materialRef.current) materialRef.current.uniforms.time.value = time;
  });

  return (
    <mesh ref={meshRef} position={[0, 0, -5]} scale={20}>
      <planeGeometry args={[1, 1, 32, 32]} />
      <shaderMaterial
        ref={materialRef}
        uniforms={{
          time: { value: 0 },
        }}
        vertexShader={`
          varying vec2 vUv;
          void main() {
            vUv = uv;
            gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
          }
        `}
        fragmentShader={`
          uniform float time;
          varying vec2 vUv;
          void main() {
            vec2 uv = vUv - 0.5;
            float dist = length(uv);
            vec3 color1 = vec3(0.05, 0.03, 0.08);
            vec3 color2 = vec3(0.15, 0.08, 0.25);
            vec3 color3 = vec3(0.08, 0.04, 0.15);
            float mix1 = smoothstep(0.0, 0.5, dist + sin(time + uv.x * 5.0) * 0.1);
            vec3 color = mix(color1, color2, mix1);
            color = mix(color, color3, smoothstep(0.3, 0.8, dist));
            gl_FragColor = vec4(color, 0.95);
          }
        `}
        side={THREE.DoubleSide}
        depthWrite={false}
        transparent
      />
    </mesh>
  );
}
