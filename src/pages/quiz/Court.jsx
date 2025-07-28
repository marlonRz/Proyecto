import { RigidBody } from "@react-three/rapier";
import useQuizStore from "../../stores/use-quiz-store";

export default function Court({ position, color, ballRef }) {
  const { incrementQuizProgress } = useQuizStore();

  const handleCollision = (event) => {
    const other = event.other;
    if (other.rigidBodyObject?.name === "ball") {
      incrementQuizProgress();
      setTimeout(() => {
        ballRef.current?.resetBall();
      }, 1000);
    }
  };

  return (
    <group>
      {/* Base de la cancha */}
      <RigidBody
        type="fixed"
        position={position}
        onCollisionEnter={handleCollision}
      >
        <mesh receiveShadow>
          <boxGeometry args={[3, 0.3, 3]} />
          <meshStandardMaterial color={color} />
        </mesh>
      </RigidBody>

      {/* Marco decorativo tipo arco */}
      <mesh position={[position[0], 1.5, position[2]]} castShadow>
        <torusGeometry args={[1.5, 0.1, 16, 100]} />
        <meshStandardMaterial color={color} />
      </mesh>
    </group>
  );
}
