import { useFrame } from '@react-three/fiber';
import { useRef, useState, useEffect } from 'react';
import * as THREE from 'three';

export const CubeGridModel = () => {
  const groupRef = useRef<THREE.Group>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useFrame((state) => { 
    if (groupRef.current) {
      groupRef.current.rotation.x = state.clock.getElapsedTime() * 0.2;
      groupRef.current.rotation.y = state.clock.getElapsedTime() * 0.3;
      groupRef.current.position.y = Math.sin(state.clock.getElapsedTime()) * 0.2;
    }
  });

  return (
    <group ref={groupRef}>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} intensity={1} />
      {[-1, 0, 1].map((x) =>
        [-1, 0, 1].map((y) => (
          <mesh 
            key={`${x}-${y}`} 
            position={[x * (isMobile ? 1.5 : 2), y * (isMobile ? 1.5 : 2), 0]}
          >
            <boxGeometry args={[isMobile ? 0.8 : 1, isMobile ? 0.8 : 1, 1]} />
            <meshStandardMaterial 
              color="#4338ca"
              emissive="#3730a3"
              wireframe
              wireframeLinewidth={0.5}
            />
          </mesh>
        ))
      )}
    </group>
  );
};