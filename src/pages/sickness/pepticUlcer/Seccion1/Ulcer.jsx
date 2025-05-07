import './Ulcer.css';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import Stomach from '../../../../models-3d/Stomach';
import VomitPerson from '../../../../models-3d/VomitPerson';
import Floor from '../../../../models-3d/Floor'
import { motion } from "framer-motion";
import { useRef } from 'react';

function Ulcer() {

  const queEsRef = useRef(null);
  const sintomasRef = useRef(null);
  const tratamientoRef = useRef(null);
  const prevencionRef = useRef(null);

  const scrollToRef = (ref) => {
    ref.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div>
      <div ref={queEsRef} className='information-container'>
        <motion.section
          className='section1'
          initial={{ x: "-100vw", opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ type: "ease", duration: 2 }}
        >
          <h1 className='information-title'>
            ÚLCERA PEPTICA
          </h1>
          <h2 className='information-subtitle'>
            ¿QUE ES LA ÚLCERA PEPTICA?
          </h2>
          <p className='information-text'>
            La enfermedad de úlcera péptica, o PUD, es la formación de úlceras  (llagas abiertas) 
            en el revestimiento del estómago y la primera sección  del intestino delgado (duodeno). 
            Las úlceras pépticas en el estómago se  llaman úlceras gástricas, mientras que las del 
            duodeno se llaman úlceras duodenales.
          </p>

          {/* Botones de navegación */}
          <div className="navigation-buttons">
            <button onClick={() => scrollToRef(queEsRef)} className="nav-button">¿QUÉ ES?</button>
            <button onClick={() => scrollToRef(sintomasRef)} className="nav-button">SÍNTOMAS</button>
            <button onClick={() => scrollToRef(tratamientoRef)} className="nav-button">TRATAMIENTO</button>
            <button onClick={() => scrollToRef(prevencionRef)} className="nav-button">PREVENCIÓN</button>
          </div>
        </motion.section>

        <motion.div
          className="ulcera_seccion1"
          initial={{ x: "100vh", opacity: 0 }}
          animate={{ x: 0, opacity: 1.6 }}
          transition={{ type: "tween", duration: 1 }}
        >
          <Canvas camera={{ position: [1.2, 1, 2], fov: 50 }} shadows={true} >
            <ambientLight intensity={1} />
            <directionalLight 
              position={[5, 5, 10]} 
              intensity={2} 
              castShadow={true}
            />
            <Stomach position={[0, -1, 0]} scale={[7, 7, 7]} />
            <Floor position={[0,0,0]} />
            <OrbitControls />
          </Canvas>
        </motion.div>
      </div>

      <div ref={sintomasRef} className='information-container'>
        <motion.section
          className='section1'
          initial={{ x: "-100vw", opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ type: "ease", duration: 2 }}
        >
          <h1 className='information-title'>
            ÚLCERA PEPTICA
          </h1>
          <h2 className='information-subtitle'>
            SINTOMAS
          </h2>
          <p className='information-text' >
          Los síntomas más comunes incluyen: <br/>
          - dolor abdominal.<br/>
          - Sensación de  plenitud o hinchazón.<br/>
          - Indigestión.<br/>
          - Acidez estomacal y náuseas.<br/>

          Los síntomas menos comunes y graves de las úlceras pépticas incluyen: <br/>
          - Vómitos (incluyendo vómitos de sangre).<br/>
          - Heces oscuras y sanguinolentas.<br/>
          - Pérdida de peso inexplicable o cambios de apetito.<br/>
          - Fatiga y problemas  para respirar.
          </p>

          {/* Botones de navegación */}
          <div className="navigation-buttons">
            <button onClick={() => scrollToRef(queEsRef)} className="nav-button">¿QUÉ ES?</button>
            <button onClick={() => scrollToRef(sintomasRef)} className="nav-button">SÍNTOMAS</button>
            <button onClick={() => scrollToRef(tratamientoRef)} className="nav-button">TRATAMIENTO</button>
            <button onClick={() => scrollToRef(prevencionRef)} className="nav-button">PREVENCIÓN</button>
          </div>
        </motion.section>

        <motion.div
          className="ulcera_seccion1"
          initial={{ x: "100vh", opacity: 0 }}
          animate={{ x: 0, opacity: 1.6 }}
          transition={{ type: "tween", duration: 1 }}
        >
          <Canvas camera={{ position: [1.2, 1, 2], fov: 50 }} shadows={true} >
            <ambientLight intensity={1} />
            <directionalLight 
              position={[5, 5, 10]} 
              intensity={2} 
              castShadow={true}
            />
            <VomitPerson position={[0, -0.9, 0]} scale={[1, 1, 1]} />
            <Floor position={[0,0,0]} />
            <OrbitControls />
          </Canvas>
        </motion.div>
      </div>

    </div> 
  );
}

export default Ulcer;