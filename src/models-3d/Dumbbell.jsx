import { useGLTF, PositionalAudio, Text } from "@react-three/drei";
import { useFrame, useThree } from '@react-three/fiber';
import { useRef, useState, useEffect } from 'react';
import * as THREE from 'three';

const Dumbbell = (props) => {
  const { nodes, materials } = useGLTF("img-3d/Dumbbell.glb");
  const modelRef = useRef();

  return (
    <group ref={modelRef} {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Dumbbell_.geometry}
        material={materials.Hex_dumbbell_10Kg}
      />  
    </group>
  );
};

export default Dumbbell;

useGLTF.preload("img-3d/Dumbbell.glb");