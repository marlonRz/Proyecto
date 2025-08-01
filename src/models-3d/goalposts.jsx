import { useGLTF,PositionalAudio } from "@react-three/drei";
import { useFrame } from '@react-three/fiber';
import { useRef, useCallback, useEffect } from 'react';

const goalposts = (props) => {
   const { nodes, materials } = useGLTF("img-3d/goalposts.glb");
   const goalposts = useRef();

   return( 
      <group ref={goalposts} {...props} dispose={null}>
         <group {...props} dispose={null}>
            <mesh
               castShadow
               receiveShadow
               geometry={nodes.Soccer_Ball_Optimized_FootballBall_mat_0.geometry}
               material={materials.FootballBall_mat}
               rotation={[-Math.PI / 2, 0, 0]}
               scale={100}
            />
            <mesh
               castShadow
               receiveShadow
               geometry={nodes.Rectangular_Goalpost_GoalPosts_mat_0.geometry}
               material={materials.GoalPosts_mat}
               position={[0, 0, 230.82]}
               rotation={[-Math.PI / 2, 0, 0]}
               scale={100}
            />
            <mesh
               castShadow
               receiveShadow
               geometry={nodes.Suspended_Goalpost_GoalPosts_mat_0.geometry}
               material={materials.GoalPosts_mat}
               position={[0, 0, -230.816]}
               rotation={[-Math.PI / 2, 0, -Math.PI]}
               scale={100}
            />
         </group>
    </group>
    ) ;

};

export default goalposts;

useGLTF.preload("img-3d/goalposts.glb");