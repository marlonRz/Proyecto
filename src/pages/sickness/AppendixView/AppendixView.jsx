import React from 'react';
import './AppendixView.css';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import Appendix3d from '../../../models-3d/appendix';
import { motion } from 'framer-motion';

const Appendix = () => {
  return (
    <div className="appendix-container">
      <motion.section
        className="appendix-text"
        initial={{ x: '-100vw', opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ type: 'tween', duration: 1.5 }}
      >
        <h1 className="appendix-title">APENDICITIS</h1>
        <h2 className="appendix-subtitle">¿QUÉ ES LA APENDICITIS?</h2>
        <p className="appendix-desc">
          La apendicitis es la inflamación del apéndice, ese pequeño “dedo” que cuelga
          del intestino grueso. Cuando se bloquea —por ejemplo, por heces endurecidas o
          pequeños cuerpos extraños— puede llenarse de pus y generar una infección. Si
          no se trata a tiempo, puede romperse y causar complicaciones.
        </p>
      </motion.section>

      <motion.div
        className="appendix-3d"
        initial={{ x: '100vw', opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ type: 'tween', duration: 1.5 }}
      >
        <Canvas camera={{ position: [1.2, -1, 2], fov: 50 }}>
          <ambientLight intensity={1.5} />
          <directionalLight position={[5, 5, 10]} intensity={2} />
          <Appendix3d position={[0, 1, 0]} scale={[7, 7, 7]} />
          <OrbitControls enablePan={false} />
        </Canvas>
      </motion.div>
    </div>
  );
};

export default Appendix;