import { useGLTF } from '@react-three/drei'

const Prevention_Diver = (props) => {
  const { nodes, materials } = useGLTF('img-3d/Prevention_Diver.glb')
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.PreventionLarge.geometry}
        material={materials.PreventionMaterial}
        scale={0.005}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.PreventionColon.geometry}
        material={materials.PreventionMaterial}
        scale={0.005}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.PreventionSlim.geometry}
        material={materials.PreventionSlimMaterial}
        scale={0.005}
      />
    </group>
  )
}
export default Prevention_Diver

useGLTF.preload('/Prevention_Diver.glb')
