import { Box } from '@react-three/drei';

export const PhoneModel = () => (
  <Box args={[0.8, 1.6, 0.1]}>
    <meshStandardMaterial
      color="#4338ca"
      wireframe
      wireframeLinewidth={0.5}
    />
  </Box>
);