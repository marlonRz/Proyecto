import './Ulcer.css';
import React, { useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Html } from '@react-three/drei';

import Stomach from '../../../../models-3d/Stomach';
import Staging1 from "./staging/Staging1";

import VomitPerson from '../../../../models-3d/VomitPerson';
import Staging2 from "./staging/Staging2";

import Medicine from '../../../../models-3d/Medicine';
import Staging3 from "./staging/Staging3";

import Dumbbell from '../../../../models-3d/Dumbbell';

import Floor from '../../../../models-3d/Floor'
import { motion } from "framer-motion";
import DiseaseNavigation from '../../../../components/disease_navegation/DiseaseNavegation';
import Title from "./text/Title";


function Ulcer() {
  const [seccion, setSeccion] = useState('que-es');

  const contenido = {
    'que-es': {
        titulo: '¿QUE ES?',
        descripcion: [`La enfermedad de úlcera péptica , o PUD, es la formación de úlceras  (llagas abiertas) 
            en el revestimiento del estómago y la primera sección  del intestino delgado (duodeno). 
            Las úlceras pépticas en el estómago se  llaman úlceras gástricas, mientras que las del 
            duodeno se llaman úlceras duodenales.`],
        objeto3D: <Stomach position={[0, -1, 0]} scale={[7, 7, 7]} />,
        light: <directionalLight position={[5, 5, 10]} intensity={2} castShadow={true}/>,
        html: <Title title={"Estomago"} />,
        texto: <Html 
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
                </Html>,
        staging: <Staging1/>
    },
    'sintomas': {
        titulo: 'SINTOMAS',
        descripcion: [
      "Los síntomas más comunes incluyen:",
      "Dolor abdominal, Sensación de plenitud o hinchazón,",
      "Indigestión, Acidez estomacal y náuseas.",
      "-",
      "Los síntomas menos comunes y graves:",
      "Vómitos (incluyendo vómitos de sangre).",
      "Heces oscuras y sanguinolentas, Pérdida de peso inexplicable,",
      "Fatiga y problemas para respirar." ],
        objeto3D: <VomitPerson position={[0, -0.9, 0]} scale={[1, 1, 1]} />,
        light: <spotLight color={"red"} position={[4,5,-2]} distance={20} intensity={1000} angle={Math.PI / 14} penumbra={1} castShadow={true}/>,
        staging: <Staging2/>,
        html: <Title title={"Vomito"} />,
        texto: <Html 
                position={[0, 1, 0]}
                distanceFactor={5}
                fontSize={0.5}
                transform >
                <p> Presiona "V" para vomitar </p>
               </Html>
        
    },
    'tratamiento': {
        titulo: 'TRATAMIENTO',
        descripcion: ['El tratamiento de las úlceras pépticas se basa en:',
        '-',
        'Abordar la causa  subyacente y promover la cicatrización.',
        'Si la úlcera está asociada a la  bacteria Helicobacter pylori, se prescribe antibióticos para erradicar la infección y reducir la acidez gástrica.',
        '-',
        'En casos de complicaciones como sangrado o  perforación puede requerirse tratamiento endoscópico o cirugía.',  
        'Si hay síntomas  graves como vómitos con sangre o heces negras, se debe buscar atención  médica inmediata.'],
        objeto3D: <Medicine position={[0, -0.24, 0]} scale={[3, 3, 3]} />,
        light: <pointLight color={"cyan"} position={[0,0,0]} intensity={10} castShadow={true}/>,
        staging: <Staging3/>,
        html: <Title title={"Medicamentos"}/>,
        
    },
    'prevencion': {
        titulo: 'PREVENCIÓN',
        descripcion: ['Cambios en el  estilo de vida, como evitar el alcohol, el tabaco, los alimentos  irritantes y el estrés.',
          'Llevar una dieta equilibrada, limitando alimentos picantes, ácidos o muy grasosos.'],
        objeto3D: <Dumbbell position={[0, -1, 0]} scale={[7, 7, 7]} />,
        light: <spotLight color={"red"} position={[4,5,-2]} distance={20} intensity={1000} angle={Math.PI / 14} penumbra={1} castShadow={true}/>,
        staging: <Staging1/>,
        html: <Title title={"Ejercicio"}/>,
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
            {contenido[seccion].descripcion.map((item, index) => (<li key={index}>{item}</li>))}
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
            {contenido[seccion].texto}
            {contenido[seccion].staging}
            <Floor position={[0,0,0]} />
            <OrbitControls />
          </Canvas>
        </motion.div>
      </div>
    </div> 
  );
}

export default Ulcer;