import './App.css';
import { NavLink } from "react-router";
import Button from './components/button/Button';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import Floor from './models-3d/Floor';
import Skull3d from './models-3d/Skull';
import { motion } from "framer-motion"; 

function App() {
  return (
    <div className='information-start'>
      <motion.section
        className='section-start'
        initial={{ x: "-100vw", opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ type: "tween", duration: 0.8 }}
      >
        <h1 className='information-start-h1'>
          GUIATE CON NOSOTROS, TU SALUD EN UN SOLO LUGAR.
        </h1>
        <p className='information-start-p'>
          Comienza ahora con un <NavLink className="nav-link-quiz" to="quiz" end>Quiz</NavLink> interactivo fortalece tus conocimientos.
        </p>
        <p className='information-start-p'>
          Observa tu anatomía con modelos 3D, aprende más sobre tus enfermedades y funcionamiento de las partes de tu cuerpo.
        </p>
        <Button text="Ver más Enfermedades" width='250px' height='50px' />
      </motion.section>

      <div className="object-3d">
        <Canvas
          camera={{ position: [1.2, -1, 2], fov: 50 }}
          className="canvas-element3d"
          style={{ width: "100%", height: "100%" }}
        >
          <ambientLight intensity={1.5} />
          <directionalLight position={[5, 5, 10]} intensity={2} />
          <Skull3d position={[0, 1, 0]} scale={[10, 10, 10]} />
          <OrbitControls />
        </Canvas>
      </div>
    </div>
  );
}

export default App;



