import {
    Cloud,
    // Environment,
    Sky,
    Sparkles,
    Stars,
  } from "@react-three/drei";
  import { Color } from "three";
  
  const Staging1 = () => {
    return (
      <>
        <Cloud
        seed={1} // A seeded random will show the same cloud consistently, default: Math.random()
        segments={50} // How many segments or particles the cloud will have, default: 20
        bounds={[8, 3, 2]} // The box3 bounds of the cloud, default: [5, 1, 1]
        concentrate="inside" // How to arrange segment volume inside the bounds, default: inside
        scale={[1, 1.5, 2]} // The general scale of the segments
        volume={1} // The volume/thickness of the segments, default: 6
        smallestVolume={0.2} // The smallest volume when distributing clouds, default: 0.25   
        speed={0.3} // Animation factor, default: 0
        fade={12} // Camera distance until the segments will fade, default: 10
        opacity={0.9} // Opacity, default: 1    
        >
        </Cloud>

      </>
    );
  };
  
  export default Staging1;