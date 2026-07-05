'use client';

import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Sphere, useTexture, OrbitControls } from '@react-three/drei';
import * as THREE from 'three';

interface FloatingParticlesProps {
  count?: number;
}

const Particles: React.FC<FloatingParticlesProps> = ({ count = 100 }) => {
  const meshRef = useRef<THREE.Points>(null);

  const particles = useMemo(() => {
    const temp = new Float32Array(count * 3);
    for (let i = 0; i < count * 3; i += 3) {
      temp[i] = (Math.random() - 0.5) * 4;
      temp[i + 1] = (Math.random() - 0.5) * 4;
      temp[i + 2] = (Math.random() - 0.5) * 4;
    }
    return temp;
  }, [count]);

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.x += 0.0001;
      meshRef.current.rotation.y += 0.0002;
    }
  });

  return (
    <points ref={meshRef}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" count={particles.length / 3} array={particles} itemSize={3} />
      </bufferGeometry>
      <pointsMaterial size={0.02} color="#00d9ff" transparent opacity={0.6} />
    </points>
  );
};

const RotatingGeometry: React.FC = () => {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.x += 0.002;
      meshRef.current.rotation.y += 0.003;
      meshRef.current.position.y = Math.sin(Date.now() * 0.001) * 0.5;
    }
  });

  return (
    <mesh ref={meshRef}>
      <icosahedronGeometry args={[1, 4]} />
      <meshPhongMaterial
        color="#00d9ff"
        emissive="#00d9ff"
        wireframe
        wireframeLinewidth={0.5}
        opacity={0.3}
        transparent
      />
    </mesh>
  );
};

export const HeroScene: React.FC = () => {
  return (
    <div className="absolute inset-0 w-full h-full">
      <Canvas camera={{ position: [0, 0, 3], fov: 75 }} style={{ background: 'transparent' }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} color="#00d9ff" />
        <pointLight position={[-10, -10, 10]} intensity={0.5} color="#ff006e" />

        <Particles count={150} />
        <RotatingGeometry />

        <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={2} />
      </Canvas>
    </div>
  );
};
