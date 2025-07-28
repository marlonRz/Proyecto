import { Center, Html, Text, Text3D } from "@react-three/drei";
import "./Title.css";

const Title = ({ title }) => {
  return (
    <Center position={[0, 1.5, 0]}>
      <Text3D
        font="fonts/alice.json"
        bevelEnabled
        bevelSize={0.01}
        bevelThickness={0.02}
        height={0.01}
        lineHeight={0.8}
        letterSpacing={0.02}
        size={0.3}
        color="#db1212ff"  // Naranja oscuro (DarkOrange)
        fillMaterial={{
          color: "#ca1313ff",  // Marrón muy oscuro (para relleno o sombras)
          metalness: 0.5,    // Añade un toque metálico si quieres
          roughness: 0.7,
        }}
      >
        {`\n    ${title} `}
        <meshStandardMaterial/>
      </Text3D>
    </Center>
    // <Text
    //   position={[0, 2, 0]}
    //   color={"orange"}
    //   anchorX={"center"}
    //   anchorY={"middle"}
    //   fontSize={0.5}
    //   font="fonts/alice.ttf"
    // >
    //   {title}
    // </Text>
    // <Html
    //   //occlude
    //   center
    //   position={[0, 2, 0]}
    //   transform
    //   distanceFactor={5}
    //   wrapperClass="title"
    // >
    //   <h1> {title}</h1>
    // </Html>
  );
};

export default Title;