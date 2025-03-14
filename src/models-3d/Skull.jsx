import { useGLTF } from "@react-three/drei";
import { useEffect } from "react";

const Skull3d = (props) => {
   const Skullmodel = useGLTF("img-3d/skull.glb");
   useEffect(()=>{
      console.log(Skullmodel);
   }, [Skullmodel])
    return( 
      <mesh>
         <primitive object={Skullmodel.scene}/>
      </mesh>
    ) ;

};

export default Skull3d;

useGLTF.preload("img-3d/skull.glb");