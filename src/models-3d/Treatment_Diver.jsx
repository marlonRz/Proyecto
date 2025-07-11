import { useGLTF } from '@react-three/drei'

const Treatment_Diver = (props) => {
  const { nodes, materials } = useGLTF('img-3d/Treatment_Diver.glb')
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Watermelon.geometry}
        material={materials.WatermelonMaterial}
        position={[0, 0.156, 0]}
        scale={0.025}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Banana.geometry}
        material={materials.BananaMaterial}
        position={[0.303, 0.019, 0.134]}
        rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
        scale={0.025}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cabbage.geometry}
        material={materials.CabbageMaterial}
        position={[0.311, 0.088, 0]}
        rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
        scale={0.025}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Onion.geometry}
        material={materials.OnionMaterial}
        position={[0.043, 0.036, 0.287]}
        rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
        scale={0.025}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Pepper.geometry}
        material={materials.PepperMaterial}
        position={[-0.227, 0.062, 0.152]}
        rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
        scale={0.025}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Zuchinni.geometry}
        material={materials.ZuchinniMaterial}
        position={[0.038, 0.024, 0.175]}
        rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
        scale={0.025}
      />
    </group>
  )
}
export default Treatment_Diver

useGLTF.preload('/Tratamiento_Diver.glb')