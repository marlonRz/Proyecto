// components/InteractiveDiver.js
import { useEffect, useRef, useState } from "react";
import { useThree, useFrame } from "@react-three/fiber";

const InteractiveDiver = ({ children, ...props }) => {
  const ref = useRef();
  const { gl } = useThree();

  const [hovered, setHovered] = useState(false);
  const [clicked, setClicked] = useState(false);
  const [rotationDirection, setRotationDirection] = useState(0);

  // Rota ligeramente si está en hover
  useFrame(() => {
    if (ref.current) {
      if (hovered) {
        ref.current.rotation.y += 0.01;
      }
      if (clicked) {
        const scale = 1 + Math.sin(Date.now() * 0.005) * 0.05;
        ref.current.scale.set(scale, scale, scale);
      } else {
        ref.current.scale.set(3, 3, 3);
      }
    }
  });

  // Detectar teclas
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (document.activeElement === gl.domElement) {
        if (event.key === "ArrowLeft") setRotationDirection(-1);
        if (event.key === "ArrowRight") setRotationDirection(1);
      }
    };

    const handleKeyUp = () => {
      setRotationDirection(0);
    };

    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("keyup", handleKeyUp);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("keyup", handleKeyUp);
    };
  }, [gl]);

  // Movimiento por teclado (rota)
  useFrame(() => {
    if (ref.current && rotationDirection !== 0) {
      ref.current.rotation.y += rotationDirection * 0.02;
    }
  });

  return (
    <group
      ref={ref}
      {...props}
      onClick={() => setClicked(!clicked)}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
    >
      {children}
    </group>
  );
};

export default InteractiveDiver;
