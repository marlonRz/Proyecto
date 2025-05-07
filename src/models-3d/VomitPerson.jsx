import { useGLTF } from "@react-three/drei";
import { useFrame } from '@react-three/fiber';
import { useRef } from 'react';

const VomitPerson = (props) => {
   const { nodes, materials } = useGLTF("img-3d/VomitPerson.glb");
   const VomitPerson3D = useRef();

   useFrame((state, delta) => {
      VomitPerson3D.current.rotation.y += 0.2*delta;
    });

    return( 
      <group ref={VomitPerson3D} {...props} dispose={null}>
         <group scale={0.007}>
         <mesh
            castShadow
            receiveShadow
            geometry={nodes.HumanVomit_1.geometry}
            material={materials['Cloths.001']}
         />
         <mesh
            castShadow
            receiveShadow
            geometry={nodes.HumanVomit_2.geometry}
            material={materials['Human.001']}
         />
         <mesh
            castShadow
            receiveShadow
            geometry={nodes.HumanVomit_3.geometry}
            material={materials['BlackMAT.001']}
         />
         </group>
      </group>
    ) ;

};

export default VomitPerson;

useGLTF.preload("img-3d/VomitPerson.glb");