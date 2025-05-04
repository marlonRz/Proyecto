import { useGLTF } from "@react-three/drei";
import { useEffect } from "react";

const Intestino3d = (props) => {
  const { scene } = useGLTF("img-3d/Intestino.glb");

  useEffect(() => {
    // Aplicar directamente al objeto cargado
    scene.scale.set(7.2,7.2,7.2);
    scene.position.set(0, -0.5, 0);
  }, [scene]);

  return (
    <primitive object={scene} castShadow receiveShadow {...props} />
  );
};

export default Intestino3d;

useGLTF.preload("img-3d/Intestino.glb");
