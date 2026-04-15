'use client';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Text } from '@react-three/drei';
import { useRef } from 'react';

function FloatingRepo({ position, name, progress }: { position: [number, number, number], name: string, progress: number }) {
  const meshRef = useRef<any>();
  useFrame((state) => {
    meshRef.current.rotation.y = state.clock.elapsedTime * 0.3;
  });

  return (
    <mesh ref={meshRef} position={position}>
      <boxGeometry args={[1.2, 1.2, 0.3]} />
      <meshStandardMaterial color={progress > 80 ? "#00FF85" : "#9F7AEA"} />
      <Text position={[0, 0, 0.2]} fontSize={0.15} color="black">{name}</Text>
    </mesh>
  );
}

export default function StaffRoadmap3D() {
  return (
    <Canvas camera={{ position: [0, 0, 12] }}>
      <ambientLight intensity={0.6} />
      <pointLight position={[10, 10, 10]} />
      <FloatingRepo position={[-5, 3, 0]} name="AI Scale" progress={92} />
      <FloatingRepo position={[0, -2, 0]} name="Orchestration" progress={95} />
      <FloatingRepo position={[6, 4, 0]} name="Performance Lab" progress={88} />
      <OrbitControls />
    </Canvas>
  );
}
