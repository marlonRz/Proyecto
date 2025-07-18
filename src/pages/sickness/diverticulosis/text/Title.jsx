import { Center, Html, Text3D } from "@react-three/drei";
import "./Title.css";

const Title = ({ title }) => {
  return (
    <>
      {/* Texto 3D principal */}
      <Center position={[-1.2, -0.5, 2]} rotation={[0, -0.8, 0]}>
        <Text3D
          font="fonts/alice.json"
          bevelEnabled
          bevelSize={0.01}
          bevelThickness={0.04}
          height={0.01}
          lineHeight={0.8}
          letterSpacing={0.04}
          size={0.2}
        >
          {`\n    ${title} `}
          <meshNormalMaterial />
        </Text3D>
      </Center>

      {/* Botón HTML en 3D */}
      <Html
        position={[-1, -0.5, 2]}
        rotation={[0, -0.5, 0]}
        transform
        distanceFactor={2}
        pointerEvents="auto"
      >
        <button
          onClick={() => console.log("Botón Presionado")}
          style={{
            fontSize: "30px",
            borderRadius: "8px",
            border: "none",
            background: "#007bff",
            color: "#fff",
            cursor: "pointer",
            zIndex: 10,
          }}
        >
          Presiona
        </button>
      </Html>
    </>
  );
};

export default Title;
