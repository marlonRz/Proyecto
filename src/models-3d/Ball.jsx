import React, { useRef, useState, forwardRef, useImperativeHandle } from "react";
import { RigidBody } from "@react-three/rapier";
import * as THREE from "three";

const Ball = forwardRef((props, ref) => {
  const ballRef = useRef();
  const [launched, setLaunched] = useState(false);

    const shoot = (event) => {
    if (launched) return;

    setLaunched(true);

    // Dirección desde la cámara hacia donde el mouse apunta
    const direction = new THREE.Vector3();
    event.ray.direction.normalize(); // ray = dirección desde cámara hacia cursor
    direction.copy(event.ray.direction);

    // Aplicamos impulso proporcional
    ballRef.current.applyImpulse(direction.multiplyScalar(5), true);
    };

  const resetBall = () => {
    if (!ballRef.current) return;
    ballRef.current.setTranslation({ x: 0, y: 1, z: 0 }, true);
    ballRef.current.setLinvel({ x: 0, y: 0, z: 0 }, true);
    ballRef.current.setAngvel({ x: 0, y: 0, z: 0 }, true);
    setLaunched(false);
  };

  useImperativeHandle(ref, () => ({ resetBall }));

  return (
    <RigidBody
      ref={ballRef}
      colliders="ball"
      restitution={0.5}
      friction={1}
      name="ball"
    >
      <mesh castShadow onPointerDown={shoot}>
        <sphereGeometry args={[0.3, 32, 32]} />
        <meshStandardMaterial color="orange" />
      </mesh>
    </RigidBody>
  );
});

export default Ball;
