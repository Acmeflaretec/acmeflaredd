import { useFrame } from '@react-three/fiber';
import { useRef } from 'react';
import * as THREE from 'three';

export const FloatingCube = () => {
  const cubeRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (cubeRef.current) {
      cubeRef.current.rotation.x = state.clock.getElapsedTime() * 0.5;
      cubeRef.current.rotation.y = state.clock.getElapsedTime() * 0.3;
      cubeRef.current.position.y = Math.sin(state.clock.getElapsedTime()) * 0.5;
    }
  });

  return (
    <mesh ref={cubeRef}>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial 
        color="#4338ca" 
        emissive="#3730a3"
        wireframe
        wireframeLinewidth={0.5}
      />
    </mesh>
  );
}; 