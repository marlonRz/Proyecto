import React, { useRef } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { Physics, RigidBody } from "@react-three/rapier";

import Ball from "./Ball";
import Court from "./Court";

export default function QuizBallGame() {
  const ballRef = useRef();

  return (
    <div style={{ width: "100%", height: "500px" }}>
      <Canvas camera={{ position: [0, 5, 10], fov: 45 }} shadows>
        <ambientLight intensity={0.5} />
        <directionalLight position={[5, 10, 5]} intensity={1.5} castShadow />
        <Physics>
          <Ball ref={ballRef} />
            <Court position={[-6, 0, -6]} color="red" ballRef={ballRef} />
            <Court position={[-2, 0, -6]} color="green" ballRef={ballRef} />
            <Court position={[2, 0, -6]} color="blue" ballRef={ballRef} />
            <Court position={[6, 0, -6]} color="purple" ballRef={ballRef} />

          {/* Piso corregido con físicas */}
          <RigidBody type="fixed" restitution={0.3} friction={1}>
            <mesh position={[0, -0.5, 0]} receiveShadow>
              <boxGeometry args={[20, 1, 20]} />
              <meshStandardMaterial color="#74b9ff" />
            </mesh>
          </RigidBody>
        </Physics>
        <OrbitControls />
      </Canvas>
    </div>
  );
}
