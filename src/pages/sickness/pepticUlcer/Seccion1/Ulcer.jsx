import './Ulcer.css';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Html } from '@react-three/drei';
import Stomach from '../../../../models-3d/Stomach';
import VomitPerson from '../../../../models-3d/VomitPerson';
import Floor from '../../../../models-3d/Floor'
import { motion } from "framer-motion";
import React, { useState } from 'react';
import DiseaseNavigation from '../../../../components/disease_navegation/DiseaseNavegation';
import Title from "./text/Title";
import Staging from "./staging/Staging";

function Ulcer() {
  const [seccion, setSeccion] = useState('que-es');

  const contenido = {
    'que-es': {
        titulo: '¿QUE ES LA ÚLCERA PEPTICA?',
        descripcion: `La enfermedad de úlcera péptica, o PUD, es la formación de úlceras  (llagas abiertas) 
            en el revestimiento del estómago y la primera sección  del intestino delgado (duodeno). 
            Las úlceras pépticas en el estómago se  llaman úlceras gástricas, mientras que las del 
            duodeno se llaman úlceras duodenales.`,
        objeto3D: <Stomach position={[0, -1, 0]} scale={[7, 7, 7]} />,
        light: <directionalLight position={[5, 5, 10]} intensity={2} castShadow={true}/>,
        html: <Title title={"Stomach"} />
    },
    'sintomas': {
        titulo: 'SINTOMAS',
        descripcion: <p>
        Los síntomas más comunes incluyen: <br/>
            - dolor abdominal. <br/>
            - Sensación de  plenitud o hinchazón.<br/>
            - Indigestión.<br/>
            - Acidez estomacal y náuseas.<br/>

            Los síntomas menos comunes y graves de las úlceras pépticas incluyen: <br/>
            - Vómitos (incluyendo vómitos de sangre).<br/>
            - Heces oscuras y sanguinolentas.<br/>
            - Pérdida de peso inexplicable o cambios de apetito.<br/>
            - Fatiga y problemas  para respirar.
            </p>,
        objeto3D: <VomitPerson position={[0, -0.9, 0]} scale={[1, 1, 1]} />,
        light: <spotLight color={"red"} position={[4,1,-2]} distance={6} intensity={1000} angle={Math.PI / 14} penumbra={1} castShadow={true}/>,
        html: <Title title={"Stomach"} />
    },
    'tratamiento': {
        titulo: 'TRATAMIENTO',
        descripcion: `Prox.`,
        objeto3D: <VomitPerson position={[0, -0.9, 0]} scale={[1, 1, 1]} />,
        light: <spotLight color={"red"} position={[4,1,-2]} distance={6} intensity={1000} angle={Math.PI / 14} penumbra={1} castShadow={true}/>,
        html: <Title title={"Stomach"} />
    },
    'prevencion': {
        titulo: 'PREVENCIÓN DE LA DIVERTICULOSIS',
        descripcion: `Prox`,
        objeto3D: <VomitPerson position={[0, -0.9, 0]} scale={[1, 1, 1]} />,
        light: <spotLight color={"red"} position={[4,1,-2]} distance={6} intensity={1000} angle={Math.PI / 14} penumbra={1} castShadow={true}/>,
        html: <Title title={"Stomach"} />
    }
  };

  return (
    <div>
      <div className='information-container'>
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
            {contenido[seccion].titulo}
          </h2>
          <p className='information-text'>
            {contenido[seccion].descripcion}
          </p>

          <DiseaseNavigation setSeccion={setSeccion} activeSection={seccion} />
        </motion.section>

        <motion.div
          className="ulcera_seccion1"
          initial={{ x: "100vh", opacity: 0 }}
          animate={{ x: 0, opacity: 1.6 }}
          transition={{ type: "tween", duration: 1 }}
        >
          <Canvas camera={{ position: [1.2, 1, 5], fov: 50 }} shadows={true} >
            <ambientLight intensity={1} />
            {contenido[seccion].light}
            {contenido[seccion].objeto3D}
            {contenido[seccion].html}
            <Floor position={[0,0,0]} />
            <OrbitControls />
            <Staging />
            <Html 
            center 
            position={[0,-1.5,0]}
            transform // Aplica transformaciones 3D
            distanceFactor={5} // Escala el tamaño según la distancia a la cámara
            >
              <p> CLICK PARA AYUDA DE AUDIO </p>
              <div style={{ 
               background: "rgba(0,0,0,0.5)", 
               color: "white", 
               padding: "10px", 
               borderRadius: "10px",
               textAlign: "center",
               fontSize: "20px",
               fontFamily: "Arial",
            }}></div>
            </Html>
          </Canvas>
        </motion.div>
      </div>
    </div> 
  );
}

export default Ulcer;