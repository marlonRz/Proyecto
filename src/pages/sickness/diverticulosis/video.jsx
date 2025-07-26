// components/Video3DPlane.js
import { useVideoTexture } from "@react-three/drei";

const Video3DPlane = () => {
  const videoTexture = useVideoTexture("./videoDiver.mp4");

  return (
    <mesh position={[0, 2, 0]} rotation={[0, Math.PI, 0]}>
      <planeGeometry args={[2, 1.2]} />
      <meshBasicMaterial map={videoTexture} toneMapped={false} />
    </mesh>
  );
};

export default Video3DPlane;
