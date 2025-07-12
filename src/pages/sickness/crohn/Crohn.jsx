import './Crohn.css';
import React, { useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Html } from '@react-three/drei';

import Intestino3d from '../../../models-3d/Crohn';
import Staging1 from "./staging/Staging1";

import SintomasCrohn from '../../../models-3d/SintomasCrohn';
import Staging2 from "./staging/Staging2";

import Title from "./text/Title";
import { motion } from "framer-motion";
import Floor from '../../../models-3d/Floor';
import DiseaseNavigation from '../../../components/disease_navegation/DiseaseNavegation';


function Crohn() {
  const [seccion, setSeccion] = useState('que-es');

  const contenido = {
    'que-es': {
        titulo: '¿QUE ES?',
        descripcion: [`La enfermedad de Crohn es una enfermedad inflamatoria intestinal (EII) crónica que puede afectar cualquier parte del tracto digestivo, desde la boca hasta el ano, aunque suele presentarse con mayor frecuencia en el intestino delgado y el colon.
Se caracteriza por episodios de inflamación que pueden provocar úlceras, estrechamiento del intestino (estenosis) y otros problemas digestivos. No tiene cura, pero los síntomas pueden manejarse con tratamiento.`],
        objeto3D: <Intestino3d position={[0, -1, 0]} scale={[7, 7, 7]} />,
        light: <directionalLight position={[5, 5, 10]} intensity={2} castShadow={true}/>,
        html: <Title title={"Intestino"} />,
        texto: null,
        staging: <Staging1/>
    },
    'sintomas': {
        titulo: 'SINTOMAS',
        descripcion: [`Los síntomas más comunes incluyen: 
Dolor abdominal (tipo cólico), Diarrea persistente (a veces con sangre), Fatiga y debilidad, Pérdida de peso sin razón aparente, Fiebre ocasional, Náuseas o vómitos, Aftas en la boca, Inflamación en las articulaciones, piel u ojos (síntomas extraintestinales)`],
        objeto3D: <SintomasCrohn position={[0, -0.9, 0]} scale={[1, 1, 1]} />,
        light: <spotLight color={"red"} position={[4,5,-2]} distance={20} intensity={1000} angle={Math.PI / 14} penumbra={1} castShadow={true}/>,
        staging: <Staging2/>
        
    },
    'tratamiento': {
        titulo: 'TRATAMIENTO',
        descripcion: ['Medicamentos antiinflamatorios (como mesalazina o corticoides), inmunosupresores, terapias biológicas, cirugía en casos severos'],
            
    },
    'prevencion': {
        titulo: 'PREVENCIÓN',
        descripcion: [`No hay una forma conocida de prevenirla completamente, pero una dieta equilibrada, manejo del estrés y dejar de fumar ayudan a reducir los brotes.`],

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
          ENFERMEDAD DE CROHN
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

export default Crohn;
