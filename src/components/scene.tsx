import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';

export default function Scene() {
  const ref = useRef<THREE.Mesh>(null!);

  useFrame(() => {
    ref!.current.rotation.y += 0.01;
  });

  return (
    <mesh ref={ref}>
      <boxGeometry args={[1, 1, 1]} />
      <meshPhongMaterial />
    </mesh>
  );
}
