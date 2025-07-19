import './Crohn.css';
import React, { useState, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import {
  OrbitControls,
  Html,
  Environment,
  KeyboardControls,
  Stars,
  useKeyboardControls,
} from '@react-three/drei';
import { motion } from "framer-motion";

import Intestino3d from '../../../models-3d/Crohn';
import SintomasCrohn from '../../../models-3d/SintomasCrohn';
import TreatmentCrohn from '../../../models-3d/TreatmentCrohn';
import Floor from '../../../models-3d/Floor';
import Title from "./text/Title";
import DiseaseNavigation from '../../../components/disease_navegation/DiseaseNavegation';

/* --- Wrapper que aplica rotación con flechas --- */
function RotatingObject({ children }) {
  const groupRef = useRef();
  const [, getKeys] = useKeyboardControls(); // no necesitamos subscribe en este caso

  useFrame(() => {
    const { rotateLeft, rotateRight } = getKeys();
    if (!groupRef.current) return;
    if (rotateLeft)  groupRef.current.rotation.y += 0.03;
    if (rotateRight) groupRef.current.rotation.y -= 0.03;
  });

  return <group ref={groupRef}>{children}</group>;
}

function Crohn() {
  const [seccion, setSeccion] = useState('que-es');

  const contenido = {
    'que-es': {
      titulo: '¿QUÉ ES?',
      descripcion: [
        `La enfermedad de Crohn es una enfermedad inflamatoria intestinal (EII) crónica que puede afectar cualquier parte del tracto digestivo, desde la boca hasta el ano. Aunque suele presentarse con mayor frecuencia en el intestino delgado y el colon.`,
        `Se caracteriza por episodios de inflamación que pueden provocar úlceras, estrechamiento del intestino (estenosis) y otros problemas digestivos.`
      ],
      objeto3D: <Intestino3d castShadow position={[0, -1, 0]} scale={[7, 7, 7]} />,
      light: (
        <directionalLight
          position={[5, 8, 10]}
          intensity={2.5}
          castShadow
          shadow-mapSize-width={2048}
          shadow-mapSize-height={2048}
        />
      ),
      html: <Title title={"Intestino"} />,
      extraHtml: (
        <Html center position={[0, 1.5, 0]} transform distanceFactor={5}>
          <button
            style={{
              background: 'rgba(0, 0, 0, 0.6)',
              color: 'white',
              padding: '10px 15px',
              border: 'none',
              borderRadius: '10px',
              cursor: 'pointer',
              fontSize: '16px'
            }}
            onClick={() => alert("Botón de prueba presionado")}
          >
            Ver más info
          </button>
        </Html>
      ),
      staging: <Environment preset="sunset" />
    },
    'sintomas': {
      titulo: 'SÍNTOMAS',
      descripcion: [
        `Los síntomas más comunes incluyen: Dolor abdominal (tipo cólico), Diarrea persistente, Fatiga, Pérdida de peso, Fiebre ocasional, Náuseas o vómitos, Aftas en la boca, Inflamación en articulaciones, piel u ojos.`
      ],
      objeto3D: <SintomasCrohn position={[0, -0.9, 0]} scale={[1, 1, 1]} />,
      light: (
        <spotLight
          color={"red"}
          position={[4, 5, -2]}
          distance={20}
          intensity={1000}
          angle={Math.PI / 14}
          penumbra={1}
          castShadow
        />
      ),
      extraHtml: (
        <Html center position={[0, -1.8, 0]} transform distanceFactor={6}>
          <a
            href="https://www.crohnscolitisfoundation.org/"
            target="_blank"
            style={{
              background: '#00ff88',
              color: '#000',
              padding: '8px 12px',
              borderRadius: '8px',
              fontWeight: 'bold',
              textDecoration: 'none'
            }}
          >
            Más recursos
          </a>
        </Html>
      ),
      staging: (
        <Stars
          radius={80}
          depth={50}
          count={5000}
          factor={4}
          saturation={0}
          fade
          speed={2}
        />
      )
    },
    'tratamiento': {
      titulo: 'TRATAMIENTO',
      descripcion: [
        'Medicamentos antiinflamatorios (mesalazina o corticoides), inmunosupresores, terapias biológicas y cirugía en casos severos.'
      ],
      objeto3D: <TreatmentCrohn position={[0, -1, 0]} scale={[2, 2, 2]} />,
      light: (
        <pointLight
          color="blue"
          position={[-4, 4, 4]}
          intensity={3}
          castShadow
        />
      ),
      extraHtml: (
        <Html center position={[0, 2, 0]} transform>
          <h1
            style={{
              color: '#fff',
              background: 'rgba(0,0,0,0.6)',
              padding: '10px 15px',
              borderRadius: '12px',
              fontSize: '15px',
              fontWeight: 'bold',
              textAlign: 'center',
              boxShadow: '0px 4px 10px rgba(0,0,0,0.5)'
            }}
          >
            Opciones terapéuticas
          </h1>
        </Html>
      ),
      staging: <Environment preset="forest" />
    }
  };

  if (!contenido[seccion]) {
    return <p style={{ color: "red", textAlign: "center" }}>Error: Sección no encontrada</p>;
  }

  return (
    <div>
      <div className='information-container'>
        <motion.section
          className='section1'
          initial={{ x: "-100vw", opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ type: "ease", duration: 2 }}
        >
          <h1 className='information-title'>ENFERMEDAD DE CROHN</h1>
          <h2 className='information-subtitle'>{contenido[seccion].titulo}</h2>
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
          <KeyboardControls
            map={[
              { name: 'rotateLeft', keys: ['ArrowLeft'] },
              { name: 'rotateRight', keys: ['ArrowRight'] }
            ]}
          >
            <Canvas camera={{ position: [1.2, 1, 5], fov: 50 }} shadows>
              <ambientLight intensity={0.8} />
              {contenido[seccion].light}
              {/* Rotación por teclado */}
              <RotatingObject>
                {contenido[seccion].objeto3D}
              </RotatingObject>
              {contenido[seccion].html}
              {contenido[seccion].extraHtml}
              {contenido[seccion].staging}
              {/* Asegúrate que Floor internamente tenga un mesh con receiveShadow */}
              <Floor position={[0, 0, 0]} receiveShadow />
              <OrbitControls enableZoom />
            </Canvas>
          </KeyboardControls>
        </motion.div>
      </div>
    </div>
  );
}

export default Crohn;
