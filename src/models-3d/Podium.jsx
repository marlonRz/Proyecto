import { Text3D } from "@react-three/drei";
import { RigidBody } from "@react-three/rapier";

const Podium = ({ correct, incorrect, percentage }) => {
  return (
    <group position={[0, 0, -5]}>
      {/* Podio 1° lugar */}
      <RigidBody type="fixed">
        <mesh position={[-4, 1, 0]}>
          <boxGeometry args={[2, 2, 2]} />
          <meshStandardMaterial color="gold" />
        </mesh>
        <Text3D
          font="/fonts/alice.json"
          size={0.4}
          height={0.1}
          position={[-4.9, 3.2, 1]}
        >
          Correctos: {correct}
          <meshStandardMaterial color="white" />
        </Text3D>
      </RigidBody>

      {/* 2° lugar */}
      <RigidBody type="fixed">
        <mesh position={[0, 0.7, 0]}>
          <boxGeometry args={[2, 1.4, 2]} />
          <meshStandardMaterial color="silver" />
        </mesh>
        <Text3D
          font="/fonts/alice.json"
          size={0.4}
          height={0.1}
          position={[-1, 2.1, 1]}
        >
          Fallos: {incorrect}
          <meshStandardMaterial color="white" />
        </Text3D>
      </RigidBody>

      {/* 3° lugar */}
      <RigidBody type="fixed">
        <mesh position={[4, 0.4, 0]}>
          <boxGeometry args={[2, 0.8, 2]} />
          <meshStandardMaterial color="#cd7f32" /> {/* bronce */}
        </mesh>
        <Text3D
          font="/fonts/alice.json"
          size={0.4}
          height={0.1}
          position={[2.8, 1.4, 1]}
        >
          {percentage.toFixed(0)}%
          <meshStandardMaterial color="white" />
        </Text3D>
      </RigidBody>
    </group>
  );
};

export default Podium;
