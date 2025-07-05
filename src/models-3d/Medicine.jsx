import { useGLTF } from "@react-three/drei";
import { useFrame } from '@react-three/fiber';
import { useRef } from 'react';

const Medicine = (props) => {
   const { nodes, materials } = useGLTF("img-3d/Medicine.glb");
   const Medicine3D = useRef();

   useFrame((state, delta) => {
      Medicine3D.current.rotation.y += 0.2*delta;
    });

    return( 
      <group ref={Medicine3D} {...props} dispose={null}>
         <group {...props} dispose={null}>
            <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_0.geometry}
            material={materials['13___Default']}
            />
            <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_0_1.geometry}
            material={materials.Material__65}
            />
            <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_0_2.geometry}
            material={materials.wire_088144225}
            />
         </group>
      </group>
    ) ;

};

export default Medicine;

useGLTF.preload("img-3d/Medicine.glb");