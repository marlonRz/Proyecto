import { useGLTF } from "@react-three/drei";
import { useEffect } from "react";

const Appendix3d = (props) => {
   const Appendixmodel = useGLTF("img-3d/Appendix.glb");
   useEffect(()=>{
      console.log(Appendix3d);
   }, [Appendix3d])
    return( 
      <mesh>
         <primitive object={Appendixmodel.scene}/>
      </mesh>
    ) ;

};

export default Appendix3d;

useGLTF.preload("img-3d/Appendix.glb");