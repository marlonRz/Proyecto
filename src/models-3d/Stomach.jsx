import { useGLTF } from "@react-three/drei";

const Stomach = (props) => {
   const { nodes, materials } = useGLTF("img-3d/Stomach.glb");
   
    return( 
      <group {...props} dispose={null}>
         <mesh
         castShadow
         receiveShadow
         geometry={nodes.Stomach_1.geometry}
         material={materials['material_0.001']}
         />
         <mesh
         castShadow
         receiveShadow
         geometry={nodes.Stomach_2.geometry}
         material={materials['defaultMat.001']}
         />
    </group>
    ) ;

};

export default Stomach;

useGLTF.preload("img-3d/Stomach.glb");