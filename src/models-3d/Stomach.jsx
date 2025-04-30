import { useGLTF } from "@react-three/drei";
import { useFrame } from '@react-three/fiber';
import { useRef } from 'react';

const Stomach = (props) => {
   const { nodes, materials } = useGLTF("img-3d/Stomach.glb");
   const stomach3d = useRef();

   useFrame((state, delta) => {
      stomach3d.current.rotation.y += 0.2*delta;
    });

    return( 
      <group ref={stomach3d} {...props} dispose={null}>
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