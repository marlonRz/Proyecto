import { useGLTF } from "@react-three/drei";
import { useEffect, useRef } from "react";
import { useFrame } from "@react-three/fiber";

const Intestino3d = (props) => {
  const { scene } = useGLTF("img-3d/Intestino.glb");
  const modelRef = useRef();

  useEffect(() => {
    scene.scale.set(1.2, 1.2, 1.2);
    scene.position.set(0, 0.3, 0);
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

export default Intestino3d;
useGLTF.preload("img-3d/Intestino.glb");
