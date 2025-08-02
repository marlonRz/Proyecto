import { useGLTF } from "@react-three/drei";
import { useFrame } from '@react-three/fiber';
import { useRef, useEffect } from 'react';

const TreatmentCrohn = (props) => {
  const { scene } = useGLTF("img-3d/TreatmentCrohn.glb");
  const treatmentRef = useRef();

  useEffect(() => {
    scene.scale.set(1.8, 1.8, 1.8);
    scene.position.set(0.9, 0.9, 0.9);
  }, [scene]);

  // Rotación suave automática
  useFrame((state, delta) => {
    if (treatmentRef.current) {
      treatmentRef.current.rotation.y += 0.15 * delta;
    }
  });

  return (
    <primitive
      ref={treatmentRef}
      object={scene}
      {...props}
      dispose={null}
    />
  );
};

export default TreatmentCrohn;
useGLTF.preload("img-3d/TreatmentCrohn.glb");
