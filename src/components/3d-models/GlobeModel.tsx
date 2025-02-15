import { Sphere } from '@react-three/drei';

export const GlobeModel = () => (
  <Sphere args={[1.5, 64, 64]}>
    <meshStandardMaterial
      color="#4338ca"
      wireframe
      wireframeLinewidth={0.5}
    />
  </Sphere>
);

export default GlobeModel;