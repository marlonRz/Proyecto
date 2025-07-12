import { Environment,Sky,Sparkles } from "@react-three/drei";

const Staging2 = () => {
  return (
//    <Environment
//      preset={null} // Desactiva el preset por defecto
//      files={[
//        "px.png", // Ruta absoluta desde public
//        "nx.png",
//        "py.png",
//        "ny.png",
//        "pz.png",
//        "nz.png",
//      ]}
//      path="staging/hospital/" // Asegúrate de que la ruta termine con /
//      ground={{
//        height: 60,
//        radius: 100,
//        scale: 4,
//      }}
//      background
//    />
    <Sparkles
          count={256} // Number of particles (default: 100)
          speed={1.5} // Speed of particles (default: 1)
          opacity={1} // Opacity of particles (default: 1)
          color={"yellow"} // Color of particles (default: 100)
          size={4} // Size of particles (default: randomized between 0 and 1)
          scale={[10, 10, 10]} // The space the particles occupy (default: 1)
          noise={1} // Movement factor (default: 1)
    />
  );
};

export default Staging2;