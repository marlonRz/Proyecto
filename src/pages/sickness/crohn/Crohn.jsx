import React from 'react';
import './Crohn.css';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Environment, ContactShadows } from '@react-three/drei';
import Intestino3d from '../../../models-3d/Crohn';
import { motion } from 'framer-motion';

const Crohn = () => {
  return (
    <div className="crohn-container">
      <motion.section
        className="crohn-text"
        initial={{ x: '-100vw', opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ type: 'tween', duration: 1.5 }}
      >
        <h1 className="crohn-title">CROHN</h1>
        <h2 className="crohn-subtitle">¿QUÉ ES LA ENFERMEDAD DE CROHN?</h2>
        <p className="crohn-desc">
        La enfermedad de Crohn es una enfermedad inflamatoria intestinal (EII) crónica que puede afectar cualquier parte del tracto digestivo, desde la boca hasta el ano, aunque suele presentarse con mayor frecuencia en el intestino delgado y el colon.
Se caracteriza por episodios de inflamación que pueden provocar úlceras, estrechamiento del intestino (estenosis) y otros problemas digestivos. No tiene cura, pero los síntomas pueden manejarse con tratamiento.
        </p>

        <div className="navigation-buttons">
            <button onClick={() => scrollToRef(queEsRef)} className="nav-button">¿QUÉ ES?</button>
            <button onClick={() => scrollToRef(sintomasRef)} className="nav-button">SÍNTOMAS</button>
            <button onClick={() => scrollToRef(tratamientoRef)} className="nav-button">TRATAMIENTO</button>
            <button onClick={() => scrollToRef(prevencionRef)} className="nav-button">PREVENCIÓN</button>
          </div>

      </motion.section>

      <motion.div
        className="crohn-3d"
        initial={{ x: '100vw', opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ type: 'tween', duration: 1.5 }}
      >
        <Canvas
          shadows
          camera={{ position: [1.2, -1, 18], fov: 50 }}
        >
          <ambientLight intensity={0.5} />
          <directionalLight
            position={[5, 5, 10]}
            intensity={1.5}
            castShadow
            shadow-mapSize-width={1024}
            shadow-mapSize-height={1024}
            shadow-camera-far={50}
            shadow-camera-left={-10}
            shadow-camera-right={10}
            shadow-camera-top={10}
            shadow-camera-bottom={-10}
          />
          <Intestino3d position={[0, 1, 0]} scale={[7, 7, 7]} />

          {/* Suelo para mostrar la sombra */}
          <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.2, 0]} receiveShadow>
            <planeGeometry args={[20, 20]} />
            <shadowMaterial opacity={0.3} />
          </mesh>

          <OrbitControls enablePan={false} />
        </Canvas>
      </motion.div>
    </div>
  );
};

export default Crohn;