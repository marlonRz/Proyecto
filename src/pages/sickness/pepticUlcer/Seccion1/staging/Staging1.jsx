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
        <Stars
          radius={100} // Radius of the sphere in which stars are placed
          depth={50} // Depth of the star field, creating a layered effect
          count={5000} // Total number of stars in the scene
          factor={4} // Star size factor, affecting how large they appear
          saturation={0} // Color saturation of the stars, 0 means grayscale
          fade // Enables fading effect for a more realistic sky
          speed={1} // Speed at which the stars move (if animated)
        />

        {/*<Sparkles
          count={256} // Number of particles (default: 100)
          speed={1.5} // Speed of particles (default: 1)
          opacity={1} // Opacity of particles (default: 1)
          color={"yellow"} // Color of particles (default: 100)
          size={4} // Size of particles (default: randomized between 0 and 1)
          scale={[10, 10, 10]} // The space the particles occupy (default: 1)
          noise={1} // Movement factor (default: 1)
        />*/}

      </>
    );
  };
  
  export default Staging1;