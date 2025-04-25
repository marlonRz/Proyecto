import './App.css';
import { NavLink } from "react-router";
import Button from './components/button/Button';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import Skull3d from './models-3d/Skull';
import { motion } from "framer-motion";
import Card from './components/card/Card';

function App() {
  return (
    <div className='place-home'>
      <div className='information-start'>
        <motion.section
          className='section-start'
          initial={{ x: "-100vw", opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ type: "ease", duration: 2 }}
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

        <motion.div
          className="object-3d"
          initial={{ x: "100vh", opacity: 0 }}
          animate={{ x: 0, opacity: 1.6 }}
          transition={{ type: "tween", duration: 1 }}
        >
          <Canvas camera={{ position: [1.2, -1, 2], fov: 50 }} >
            <ambientLight intensity={1.5} />
            <directionalLight position={[5, 5, 10]} intensity={2} />
            <Skull3d position={[0, 1, 0]} scale={[7, 7, 7]} />
            <OrbitControls />
          </Canvas>
        </motion.div>
      </div>
      <motion.section
        className='section-enfermedades'
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true, amount: 0.5 }} 
      >
        <div>
          <Card title={"Apendicitis"} route={"apendicitis"} image="/img/apendicitis.jpg" />
        </div>
        <div>
          <Card title={"Enfermedad Crohn"} route={"crohn"} image="/img/crohn.jpg" />
        </div>
        <div>
          <Card title={"Diverticulosis"} route={"diverticulosis"} image="/img/diverticulosis.jpg" />
        </div>
        <div>
          <Card title={"Peritonitis"} route={"peritonitis"} image="/img/peritonitis.png" />
        </div>
      </motion.section>
    </div>
  );
}

export default App;