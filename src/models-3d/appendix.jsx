import { useGLTF } from "@react-three/drei";
import { useEffect } from "react";

const Appendix3d = (props) => {
   const Appendixmodel = useGLTF("img-3d/Appendix.glb");

   useEffect(() => {
      console.log(Appendixmodel);
   }, [Appendixmodel]);

   return (
      <primitive object={Appendixmodel.scene} {...props} castShadow receiveShadow />
   );
};

export default Appendix3d;

useGLTF.preload("img-3d/Appendix.glb");