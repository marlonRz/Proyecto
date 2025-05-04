import { useGLTF } from "@react-three/drei";
import { useEffect } from "react";

const Appendix3d = (props) => {
   const Intestinomodel = useGLTF("img-3d/Intestino.glb");

   useEffect(() => {
      console.log(Intestinomodel);
   }, [Intestinomodel]);

   return (
      <primitive object={Intestino.scene} {...props} castShadow receiveShadow />
   );
};

export default Intestino3d;

useGLTF.preload("img-3d/Intestino.glb");