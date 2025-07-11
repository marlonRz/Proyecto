import { useGLTF } from '@react-three/drei'

const Sintomas_Diver = (props) => {
  const { nodes, materials } = useGLTF('img-3d/Sintomas_Diver.glb')
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Diverticulosis.geometry}
        material={materials.DiverticulosisMaterial}
      />
    </group>
  )
}
export default Sintomas_Diver
useGLTF.preload('/diverticulosis.glb')