import { Center, Html, Text, Text3D } from "@react-three/drei";
import "./Title.css";

const Title = ({ title }) => {
  return (
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
  );
};

export default Title;