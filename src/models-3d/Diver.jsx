import { useGLTF } from "@react-three/drei";

const Diver = (props) => {
  const { nodes, materials } = useGLTF("img-3d/DiverQue_es.glb");

  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Symptoms.geometry}
        material={materials.SymptomsMaterial}
      />
    </group>
  );

};

export default Diver;

useGLTF.preload("img-3d/DiverQue_es.glb");