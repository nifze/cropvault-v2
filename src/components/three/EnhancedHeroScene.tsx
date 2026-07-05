'use client';

import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

const AnimatedSphere: React.FC = () => {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.x += 0.001;
      meshRef.current.rotation.y += 0.002;
    }
  });

  return (
    <mesh ref={meshRef}>
      <sphereGeometry args={[1.5, 64, 64]} />
      <meshPhongMaterial
        color="#00d9ff"
        emissive="#00d9ff"
        emissiveIntensity={0.2}
        wireframe={false}
        shininess={100}
      />
    </mesh>
  );
};

const FloatingRing: React.FC<{ radius: number; speed: number }> = ({ radius, speed }) => {
  const groupRef = useRef<THREE.Group>(null);

  useFrame(() => {
    if (groupRef.current) {
      groupRef.current.rotation.z += speed;
    }
  });

  return (
    <group ref={groupRef}>
      <mesh position={[radius, 0, 0]}>
        <boxGeometry args={[0.2, 0.2, 0.2]} />
        <meshStandardMaterial color="#ff006e" emissive="#ff006e" emissiveIntensity={0.5} />
      </mesh>
    </group>
  );
};

export const EnhancedHeroScene: React.FC = () => {
  return (
    <Canvas camera={{ position: [0, 0, 4], fov: 75 }} style={{ background: 'transparent' }}>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} intensity={1} color="#00d9ff" />
      <pointLight position={[-10, -10, 10]} intensity={0.8} color="#ff006e" />

      <AnimatedSphere />
      <FloatingRing radius={2.5} speed={0.003} />
      <FloatingRing radius={3.5} speed={-0.002} />
    </Canvas>
  );
};
