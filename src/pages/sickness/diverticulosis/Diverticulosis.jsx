import "./Diverticulosis.css";
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import Diver from '../../../models-3d/Diver';
import { motion } from "framer-motion";
import React, { useState } from 'react';
import DiseaseNavigation from '../../../components/disease_navegation/DiseaseNavegation';

function Diverticulosis() {
    const [seccion, setSeccion] = useState('que-es');

    const contenido = {
        'que-es': {
            titulo: '¿QUÉ ES LA DIVERTICULOSIS?',
            descripcion: `Los divertículos intestinales son pequeñas bolsas o sáculos que protruyen desde 
      la luz del intestino hacia el exterior de éste. El lugar donde se encuentran con mayor frecuencia
       es en una zona del colon izquierdo llamada sigma.`
        },
        'sintomas': {
            titulo: 'SÍNTOMAS DE LA DIVERTICULOSIS',
            descripcion: `
        Hinchazón,
        Estreñimiento o diarrea,
        Calambres o dolor en la parte inferior del abdomen y
        Pequeñas cantidades de sangre en las heces o en el papel higiénico`
        },
        'tratamiento': {
            titulo: 'TRATAMIENTO DE LA DIVERTICULOSIS',
            descripcion: `El tratamiento puede incluir una dieta rica en fibra, líquidos y, en algunos casos,
      antibióticos si hay infección.`
        },
        'prevencion': {
            titulo: 'PREVENCIÓN DE LA DIVERTICULOSIS',
            descripcion: `Mantener una dieta alta en fibra, hidratarse adecuadamente y hacer ejercicio regularmente.`
        }
    };

    return (
        <div className='place-home'>
            <div className='information-start'>
                <motion.section
                    className='section-start'
                    initial={{ x: "-100vw", opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ type: "ease", duration: 2 }}
                >
                    <h1 className='information-start-h1'>DIVERTICULOSIS</h1>
                    <h1 className='information-start-h1'>{contenido[seccion].titulo}</h1>
                    <p className='information-start-p'>{contenido[seccion].descripcion}</p>

                    <DiseaseNavigation setSeccion={setSeccion} activeSection={seccion} />
                </motion.section>

                <motion.div
                    className="object-3d"
                    initial={{ x: "100vh", opacity: 0 }}
                    animate={{ x: 0, opacity: 1.6 }}
                    transition={{ type: "tween", duration: 1 }}
                >
                    <Canvas camera={{ position: [0, 0, 5], fov: 50 }} shadows>
                        <ambientLight intensity={2} /> 
                        <directionalLight
                            position={[0, 0, 5]}
                            intensity={5}
                            castShadow
                            shadow-mapSize-width={2048}
                            shadow-mapSize-height={2048}
                        />
                        <directionalLight
                            position={[-5, 2, 5]}
                            intensity={2}
                        />
                        <directionalLight
                            position={[0, -5, -5]}
                            intensity={0.9}
                        />
                        <pointLight position={[2, 2, 2]} intensity={0.9} />
                        <Diver
                            position={[0, 0, 0]}
                            scale={[4, 4, 4]}
                            rotation={[0, Math.PI, 0]}
                            castShadow
                            receiveShadow
                        />
                        <OrbitControls />
                    </Canvas>
                </motion.div>
            </div>
        </div>
    );
}

export default Diverticulosis;
