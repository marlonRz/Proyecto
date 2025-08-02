import './Crohn.css';
import React, { useState, useRef, useEffect } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { OrbitControls, Html, Environment, Stars, Sparkles, Text3D } from '@react-three/drei';
import { motion } from "framer-motion";
import { EffectComposer, Bloom } from '@react-three/postprocessing';
import * as THREE from 'three';

import Intestino3d from '../../../models-3d/Crohn';
import SintomasCrohn from '../../../models-3d/SintomasCrohn';
import TreatmentCrohn from '../../../models-3d/TreatmentCrohn';
import PrevencionCrohn from '../../../models-3d/PrevencionCrohn';
import Floor from '../../../models-3d/Floor';
import DiseaseNavegation from "../../../components/disease_navegation/DiseaseNavegation";

// ✅ Importamos fuente JSON con ?url
import fontUrl from '../../../fonts/helvetiker_regular.typeface.json?url';

// ✅ Rutas absolutas sonidos
const clickSoundUrl = new URL('../../../sounds/click.mp3', import.meta.url).href;
const ambientSoundUrl = new URL('../../../sounds/ambient.mp3', import.meta.url).href;

// ✅ Control de desbloqueo de audio
let userInteracted = false;

// ✅ Sonido click
const playClickSound = () => {
  if (!userInteracted) return; // Solo después de interacción
  const audio = new Audio(clickSoundUrl);
  audio.volume = 0.8;
  audio.play().catch(() => console.log("Click audio blocked"));
};

// ✅ Sonido ambiental
const Sound3D = ({ url }) => {
  const { camera } = useThree();
  const listener = new THREE.AudioListener();
  const sound = new THREE.PositionalAudio(listener);

  useEffect(() => {
    if (!userInteracted) return;
    camera.add(listener);
    const loader = new THREE.AudioLoader();
    loader.load(url, (buffer) => {
      sound.setBuffer(buffer);
      sound.setRefDistance(10);
      sound.setLoop(true);
      sound.setVolume(0.5);
      sound.play();
    });
    return () => {
      sound.stop();
      camera.remove(listener);
    };
  }, [camera, url]);

  return <primitive object={sound} />;
};

// ✅ Animación flotante
const AnimatedModel = ({ children, hover }) => {
  const ref = useRef();
  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.y += 0.005;
      ref.current.position.y = Math.sin(state.clock.elapsedTime) * 0.3;
      const scaleFactor = hover ? 1.3 : 1 + Math.sin(state.clock.elapsedTime * 2) * 0.05;
      ref.current.scale.set(scaleFactor, scaleFactor, scaleFactor);
    }
  });
  return <group ref={ref}>{children}</group>;
};

function Crohn() {
  const [seccion, setSeccion] = useState('que-es');
  const [hover, setHover] = useState(false);

  // ✅ Ángulos independientes por sección
  const [rotaciones, setRotaciones] = useState({
    'que-es': 0,
    'sintomas': 0,
    'tratamiento': 0,
    'prevencion': 0
  });

  const sceneGroup = useRef();

  // ✅ Manejo de teclado
  useEffect(() => {
    const handleKey = (e) => {
      if (!sceneGroup.current) return;
      setRotaciones((prev) => {
        const newRot = { ...prev };
        if (e.key === 'ArrowLeft') {
          newRot[seccion] += 0.1;
        } else if (e.key === 'ArrowRight') {
          newRot[seccion] -= 0.1;
        } else if (e.key === '1') {
          newRot[seccion] = 0;
        } else if (e.key === '2') {
          newRot[seccion] = Math.PI * 2 / 3;
        } else if (e.key === '3') {
          newRot[seccion] = Math.PI * 4 / 3;
        }
        return newRot;
      });
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [seccion]);

  // ✅ Desbloqueo global de audio tras primer click
  useEffect(() => {
    const unlockAudio = () => {
      userInteracted = true;
      window.removeEventListener('click', unlockAudio);
    };
    window.addEventListener('click', unlockAudio);
    return () => window.removeEventListener('click', unlockAudio);
  }, []);

  const contenido = {
    'que-es': {
      titulo: '¿QUÉ ES?',
      descripcion: [
        `La enfermedad de Crohn es una enfermedad inflamatoria intestinal (EII) crónica que puede afectar cualquier parte del tracto digestivo.`,
        `Se caracteriza por inflamación que puede provocar úlceras, estrechamiento del intestino y otros problemas digestivos.`
      ],
      objeto3D: <AnimatedModel hover={hover}><Intestino3d scale={[8, 8, 8]} /></AnimatedModel>,
      titulo3D: (
        <Text3D font={fontUrl} size={0.6} height={0.1} position={[-2.5, 3.5, 0]} bevelEnabled bevelSize={0.02}>
          ENFERMEDAD
          <meshStandardMaterial color="orange" />
        </Text3D>
      ),
      boton: (
        <Html center position={[0, -2.5, 0]} transform>
          <button
            style={{ background: '#000', color: '#fff', padding: '10px 15px', borderRadius: '10px', cursor: 'pointer' }}
            onClick={() => {
              playClickSound();
              alert('Más información sobre Crohn');
            }}
          >
            Ver más info
          </button>
        </Html>
      ),
      light: <directionalLight position={[5, 5, 10]} intensity={2} castShadow />,
      staging: <Stars radius={80} depth={40} count={2000} factor={3} />,
      sonido: userInteracted && <Sound3D url={ambientSoundUrl} />
    },
    'sintomas': {
      titulo: 'SINTOMAS',
      descripcion: [`Dolor abdominal, diarrea persistente, fatiga, pérdida de peso, fiebre, náuseas, aftas y problemas en articulaciones.`],
      objeto3D: <AnimatedModel hover={hover}><SintomasCrohn scale={[1.3, 1.3, 1.3]} /></AnimatedModel>,
      titulo3D: (
        <Text3D font={fontUrl} size={0.5} height={0.1} position={[-2, 3.2, 0]}>
          SINTOMAS
          <meshStandardMaterial color="red" />
        </Text3D>
      ),
      boton: (
        <Html center position={[0, -2.5, 0]} transform>
          <a
            href="https://www.crohnscolitisfoundation.org/"
            target="_blank"
            style={{ background: '#00ff88', color: '#000', padding: '10px 15px', borderRadius: '10px', fontWeight: 'bold', textDecoration: 'none' }}
            onClick={playClickSound}
          >
            Más recursos
          </a>
        </Html>
      ),
      light: <spotLight color="red" position={[4, 5, -2]} intensity={2} angle={Math.PI / 8} castShadow />,
      staging: <Environment preset="city" />
    },
    'tratamiento': {
      titulo: 'TRATAMIENTO',
      descripcion: [`Medicamentos antiinflamatorios, inmunosupresores, terapias biológicas y cirugía en casos graves.`],
      objeto3D: <AnimatedModel hover={hover}><TreatmentCrohn scale={[3, 3, 3]} /></AnimatedModel>,
      titulo3D: (
        <Text3D font={fontUrl} size={0.5} height={0.1} position={[-1.5, 3, 0]}>
          TRATAMIENTO
          <meshStandardMaterial color="blue" />
        </Text3D>
      ),
      light: <pointLight color="blue" position={[-4, 4, 4]} intensity={3} castShadow />,
      staging: <Environment preset="sunset" />
    },
    'prevencion': {
      titulo: 'PREVENCION',
      descripcion: [`Mantén una dieta equilibrada, evita el tabaco y controla el estrés para reducir riesgos de brotes.`],
      objeto3D: <AnimatedModel hover={hover}><PrevencionCrohn scale={[3, 3, 3]} /></AnimatedModel>,
      titulo3D: (
        <Text3D font={fontUrl} size={0.5} height={0.1} position={[-1.8, 3, 0]}>
          PREVENCION
          <meshStandardMaterial color="green" />
        </Text3D>
      ),
      light: <spotLight color="green" position={[2, 6, 2]} intensity={2} castShadow />,
      staging: <Environment preset="forest" />
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
          <h1 className='information-title'>ENFERMEDAD DE CROHN</h1>
          <h2 className='information-subtitle'>{contenido[seccion].titulo}</h2>
          <ul className='information-text'>
            {contenido[seccion].descripcion.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
          <DiseaseNavegation setSeccion={setSeccion} activeSection={seccion} />
        </motion.section>

        <motion.div
          className="ulcera_seccion1"
          initial={{ x: "100vh", opacity: 0 }}
          animate={{ x: 0, opacity: 1.6 }}
          transition={{ type: "tween", duration: 1 }}
        >
          <Canvas shadows camera={{ position: [0, 5, 10], fov: 50 }} gl={{ antialias: true, preserveDrawingBuffer: true }}>
            <ambientLight intensity={0.5} />
            {contenido[seccion].light}
            {contenido[seccion].sonido}

            <group
              ref={sceneGroup}
              onPointerEnter={() => setHover(true)}
              onPointerLeave={() => setHover(false)}
              rotation={[0, rotaciones[seccion], 0]}
            >
              {contenido[seccion].objeto3D}
              {contenido[seccion].titulo3D}
              {contenido[seccion].boton}
            </group>

            <Html center position={[0, -4.2, 0]} transform>
              <div style={{ background: 'rgba(0,0,0,0.6)', color: 'white', padding: '8px 12px', borderRadius: '8px' }}>
                Usa ← → para rotar | Teclas 1-3 rotan escena | Rueda zoom
              </div>
            </Html>

            {contenido[seccion].staging}
            <Sparkles count={50} scale={6} speed={1} />
            <Floor position={[0, 0, 0]} scale={[1.5, 1.5, 1.5]} />
            <OrbitControls enableZoom={true} />

            <EffectComposer>
              <Bloom intensity={1.5} luminanceThreshold={0.3} />
            </EffectComposer>
          </Canvas>
        </motion.div>
      </div>
    </div>
  );
}

export default Crohn;
