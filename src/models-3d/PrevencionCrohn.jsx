import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef, useEffect } from "react";

const PrevencionCrohn = (props) => {
  const { scene } = useGLTF("img-3d/PrevencionCrohn.glb");
  const modelRef = useRef();

  useEffect(() => {
    scene.scale.set(2.2, 2.2, 2.2); // Más grande
    scene.position.set(0, 0, 0);
    modelRef.current = scene;
  }, [scene]);

  useFrame(() => {
    if (modelRef.current) {
      modelRef.current.rotation.y += 0.005;
    }
  });

  return (
    <primitive object={scene} castShadow receiveShadow {...props} />
  );
};

export default PrevencionCrohn;

useGLTF.preload("img-3d/PrevencionCrohn.glb");
