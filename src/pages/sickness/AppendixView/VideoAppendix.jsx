import { useRef, useEffect } from "react";
import { useVideoTexture } from "@react-three/drei";

const Video3DAppendix = ({ playing }) => {
  const videoRef = useRef(null);

  const texture = useVideoTexture("/AppendixTratamiento.mp4", {
    loop: true,
    muted: true,
    autoplay: true,
  });

  useEffect(() => {
    const video = texture?.image;
    videoRef.current = video;

    if (video) {
      if (playing) {
        video.currentTime = 0; // Reinicia el video
        video.play();
      } else {
        video.pause();
      }
    }
  }, [texture, playing]);

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      if (playing) {
        video.currentTime = 0; // Reinicia al volver a activar
        video.play();
      } else {
        video.pause();
      }
    }
  }, [playing]);

  return (
    <mesh position={[0, 0.6, 0]} scale={[7, 7, 7]}>
      <planeGeometry args={[2, 1.2]} />
      <meshBasicMaterial map={texture} toneMapped={false} />
    </mesh>
  );
};

export default Video3DAppendix;
