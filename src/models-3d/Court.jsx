import { RigidBody } from "@react-three/rapier";
import { Html } from "@react-three/drei";
import { useEffect } from "react";

export default function Court({ position, color, ballRef, isCorrect, onAnswered, label }) {
  const handleCollision = (event) => {
    const other = event.other;
    if (other.rigidBodyObject?.name === "ball") {
      onAnswered(isCorrect);

      // Reinicia el balón después de 1 segundo
      setTimeout(() => {
        ballRef.current?.resetBall();
      }, 1000);
    }
  };

  return (
    <group position={position}>
      {/* Piso cancha */}
      <RigidBody
        type="fixed"
        onCollisionEnter={handleCollision}
      >
        <mesh receiveShadow>
          <boxGeometry args={[4, 0.1, 6]} />
          <meshStandardMaterial color="#2ecc71" />
        </mesh>

        {/* Arco tipo portería */}
        <mesh position={[0, 1.25, -3]}>
          <boxGeometry args={[3, 2.5, 0.2]} />
          <meshStandardMaterial color="#ecf0f1" />
        </mesh>

        {/* Poste izquierdo */}
        <mesh position={[-1.5, 0.6, -2.5]}>
          <boxGeometry args={[0.1, 1.2, 0.1]} />
          <meshStandardMaterial color="#ffffff" />
        </mesh>

        {/* Poste derecho */}
        <mesh position={[1.5, 0.6, -2.5]}>
          <boxGeometry args={[0.1, 1.2, 0.1]} />
          <meshStandardMaterial color="#ffffff" />
        </mesh>

        {/* Travesaño */}
        <mesh position={[0, 1.2, -2.5]}>
          <boxGeometry args={[3.1, 0.1, 0.1]} />
          <meshStandardMaterial color="#ffffff" />
        </mesh>
      </RigidBody>

      {/* Texto flotante con nombre de la opción */}
      <Html position={[0, 2.5, 0]} center>
        <div
          style={{
            color: "white",
            background: "rgba(0,0,0,0.6)",
            padding: "6px 10px",
            borderRadius: "8px",
            fontSize: "16px",
            fontFamily: "Arial",
            textAlign: "center",
          }}
        >
          {label}
        </div>
      </Html>
    </group>
  );
}
