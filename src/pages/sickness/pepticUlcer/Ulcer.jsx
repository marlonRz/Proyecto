import './Ulcer.css';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import Stomach from '../../../models-3d/Stomach';
import { motion } from "framer-motion";

function Ulcer() {
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
            ÚLCERA PEPTICA
          </h1>
          <h1 className='information-start-h1'>
            ¿QUE ES LA ÚLCERA PEPTICA?
          </h1>
          <p className='information-start-p'>
            La enfermedad de úlcera péptica, o PUD, es la formación de úlceras  (llagas abiertas) 
            en el revestimiento del estómago y la primera sección  del intestino delgado (duodeno). 
            Las úlceras pépticas en el estómago se  llaman úlceras gástricas, mientras que las del 
            duodeno se llaman úlceras duodenales.
          </p>
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
            <Stomach position={[0, -1, 0]} scale={[7, 7, 7]} />
            <OrbitControls />
          </Canvas>
        </motion.div>
        <div className="navigation-section">
        <div className="navigation-container">
          <span className="diseases-text">Enfermedades</span>
          <ul className="navigation-list">
            <li className="navigation-item">¿QUÉ ES?</li>
            <li className="navigation-item">SINTOMAS</li>
            <li className="navigation-item">TRATAMIENTO</li>
            <li className="navigation-item">PREVENCIÓN</li>
          </ul>
        </div>
      </div>
      </div>

      
    </div>
  );
}

export default Ulcer;