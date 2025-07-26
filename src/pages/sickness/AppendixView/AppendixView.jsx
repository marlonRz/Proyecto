// src/views/AppendixView/Appendix.jsx
import React, { useState, useRef, useEffect } from "react";
import "./AppendixView.css";
import { Canvas } from "@react-three/fiber";
import {
  OrbitControls,
  Environment,
  Stars,
  Sky,
  Sparkles,
  Html,
  Text,
} from "@react-three/drei";
import Appendix3d from "../../../models-3d/appendix";
import Sintoma1Appendix3d from "../../../models-3d/Sintoma1Appendix";
import Sintoma2Appendix3d from "../../../models-3d/Sintoma2Appendix";
import Sintoma3Appendix3d from "../../../models-3d/Sintoma3Appendix";
import { motion } from "framer-motion";

const sintomas = [
  {
    titulo: "Dolor abdominal",
    descripcion:
      "Dolor intenso en la parte baja derecha del abdomen, que puede comenzar cerca del ombligo.",
    Modelo: Sintoma1Appendix3d,
  },
  {
    titulo: "Pérdida de apetito",
    descripcion: "Falta de ganas de comer, acompañada de náuseas o vómitos.",
    Modelo: Sintoma2Appendix3d,
  },
  {
    titulo: "Fiebre",
    descripcion:
      "Temperatura corporal elevada, a menudo junto con otros síntomas.",
    Modelo: Sintoma3Appendix3d,
  },
];

const Appendix = () => {
  const [section, setSection] = useState("main");
  const [sintomaIndex, setSintomaIndex] = useState(0);
  const [color, setColor] = useState("white");
  const [textColor, setTextColor] = useState("white");
  const [textPosX, setTextPosX] = useState(0);
  const modelRef = useRef();
  const cameraRef = useRef();

  const handleTextToggle = () => {
    setTextColor((prev) => (prev === "white" ? "black" : "white"));
    setTextPosX((prev) => (prev === 0 ? -10 : 0));
  };

  // — Eventos de teclado 3D (2) —
  // c: cambia color y posición del texto
  // k: vuelve a sección "main"
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "c") {
        handleTextToggle();
      }
      if (e.key === "k") {
        setSection("main");
        setSintomaIndex(0);
      }
      if (e.key === "z" && cameraRef.current) {
        cameraRef.current.position.z -= 1;
      }
      if (e.key === "x" && cameraRef.current) {
        cameraRef.current.position.z += 1;
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  // Alterna color y posición del texto 3D

  const handleSiguiente = () => {
    if (sintomaIndex < sintomas.length - 1) {
      setSintomaIndex((i) => i + 1);
    } else {
      setSection("main");
      setSintomaIndex(0);
    }
  };

  const handleSintomas = () => {
    setSection("sintomas");
    setSintomaIndex(0);
  };

  const handleModelClick = () => {
    // Evento de mouse 3D: onClick en el modelo
    setColor((prev) => (prev === "white" ? "orange" : "white"));
  };

  return (
    <div className="appendix-container">
      {section === "main" && (
        <>
          <motion.section
            className="appendix-text"
            initial={{ x: "-100vw", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ type: "tween", duration: 1.5 }}
          >
            <h1 className="appendix-title">APENDICITIS</h1>
            <h2 className="appendix-subtitle">¿QUÉ ES LA APENDICITIS?</h2>
            <p className="appendix-desc">
              La apendicitis es la inflamación del apéndice, ese pequeño “dedo”
              que cuelga del intestino grueso. Cuando se bloquea —por ejemplo,
              por heces endurecidas o pequeños cuerpos extraños— puede llenarse
              de pus y generar una infección. Si no se trata a tiempo, puede
              romperse y causar complicaciones.
            </p>

            <div className="navigation-buttons">
              <button onClick={() => setSection("main")} className="nav-button">
                ¿QUÉ ES?
              </button>
              <button onClick={handleSintomas} className="nav-button">
                SÍNTOMAS
              </button>
              <button
                onClick={() => setSection("tratamiento")}
                className="nav-button"
              >
                TRATAMIENTO
              </button>
              <button
                onClick={() => setSection("Prevencion")}
                className="nav-button"
              >
                PREVENCIÓN
              </button>
            </div>
          </motion.section>

          <motion.div
            className="appendix-3d"
            initial={{ x: "100vw", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ type: "tween", duration: 1.5 }}
          >
            <Canvas shadows camera={{ position: [1.2, -1, 18], fov: 50 }}>
              <ambientLight intensity={0.5} />
              <directionalLight
                position={[5, 5, 10]}
                intensity={1.5}
                castShadow
                shadow-normalBias={0.05} // sombras más suaves
                shadow-mapSize-width={2048}
                shadow-mapSize-height={1024}
                shadow-camera-far={50}
                shadow-camera-left={-10}
                shadow-camera-right={10}
                shadow-camera-top={10}
                shadow-camera-bottom={-10}
              />
              <spotLight
                position={[0, 10, 10]}
                angle={0.3}
                penumbra={0.5}
                intensity={2}
                castShadow
              />
              <Appendix3d
                position={[0, 1, 0]}
                scale={[7, 7, 7]}
                rotation={[Math.PI, 0, 0]}
              />
              <mesh
                rotation={[-Math.PI / 2, 0, 0]}
                position={[0, -0.2, 0]}
                receiveShadow
              >
                <planeGeometry args={[20, 20]} />
                <shadowMaterial opacity={0.3} />
              </mesh>
              <OrbitControls enablePan={false} />
            </Canvas>
          </motion.div>
        </>
      )}

      {/*** SECCIÓN “TRATAMIENTO” ***/}
      {section === "tratamiento" && (
        <>
          <motion.section
            className="appendix-text"
            initial={{ x: "-100vw", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1.2 }}
          >
            {/* Título y subtítulo fijos */}
            <h1 className="appendix-title">APENDICITIS</h1>
            <h2 className="appendix-subtitle">TRATAMIENTO</h2>
            <p className="appendix-desc">
              Generalmente, se requiere una cirugía (apendicectomía) para quitar
              el apéndice, acompañada de antibióticos antes y después para
              combatir la infección. En casos complicados, puede ser necesario
              drenar algún absceso.
            </p>
            <div className="navigation-buttons">
              <button onClick={() => setSection("main")} className="nav-button">
                ¿QUÉ ES?
              </button>
              <button onClick={handleSintomas} className="nav-button">
                SÍNTOMAS
              </button>
              <button
                onClick={() => setSection("tratamiento")}
                className="nav-button active"
              >
                TRATAMIENTO
              </button>
              <button
                onClick={() => setSection("Prevencion")}
                className="nav-button"
              >
                PREVENCIÓN
              </button>
            </div>
          </motion.section>

          <motion.div
            className="appendix-3d"
            initial={{ x: "100vw", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1.2 }}
          >
            <Canvas shadows camera={{ position: [1.2, -1, 18], fov: 50 }}>
              {/* Mismo modelo 3D que en “main” */}
              <ambientLight intensity={0.5} />
              <directionalLight
                position={[5, 5, 10]}
                intensity={1.5}
                castShadow
                shadow-normalBias={0.05} // sombras más suaves
                shadow-mapSize-width={2048}
                shadow-mapSize-height={1024}
              />
              <spotLight
                position={[0, 10, 10]}
                angle={0.3}
                penumbra={0.5}
                intensity={2}
                castShadow
              />
              <Appendix3d
                position={[0, 1, 0]}
                scale={[7, 7, 7]}
                rotation={[Math.PI, 0, 0]}
              />
              <mesh
                rotation={[-Math.PI / 2, 0, 0]}
                position={[0, -0.2, 0]}
                receiveShadow
              >
                <planeGeometry args={[20, 20]} />
                <shadowMaterial opacity={0.3} />
              </mesh>
              {/* TEXTO 3D “Cirugía” en verde */}
              <Text
                position={[3, -5, 0]}
                fontSize={1.2}
                anchorX="center"
                anchorY="middle"
                color="var(--primary-green)"
              >
                Cirugía
              </Text>
              <OrbitControls enablePan={false} />
            </Canvas>
          </motion.div>
        </>
      )}

      {/*** SECCIÓN “PREVENCION” ***/}
      {section === "Prevencion" && (
        <>
          <motion.section
            className="appendix-text"
            initial={{ x: "-100vw", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1.2 }}
          >
            {/* Título y subtítulo fijos */}
            <h1 className="appendix-title">APENDICITIS</h1>
            <h2 className="appendix-subtitle">PREVENCION</h2>
            <p className="appendix-desc">
              No existe una forma infalible de prevenir la apendicitis, pero
              llevar una dieta rica en fibra y prestar atención a los primeros
              síntomas puede ayudarte a actuar a tiempo y evitar complicaciones.
            </p>
            <div className="navigation-buttons">
              <button onClick={() => setSection("main")} className="nav-button">
                ¿QUÉ ES?
              </button>
              <button onClick={handleSintomas} className="nav-button">
                SÍNTOMAS
              </button>
              <button
                onClick={() => setSection("tratamiento")}
                className="nav-button active"
              >
                TRATAMIENTO
              </button>
              <button
                onClick={() => setSection("Prevencion")}
                className="nav-button"
              >
                PREVENCIÓN
              </button>
            </div>
          </motion.section>

          <motion.div className="appendix-3d" /* … */>
            <Canvas shadows camera={{ position: [1.2, -1, 18], fov: 50 }}>
              {/* Iluminación y sombras */}
              <ambientLight intensity={0.5} />
              <directionalLight
                position={[5, 5, 10]}
                intensity={1.5}
                castShadow
                /* … ajustes de sombra … */
              />
              <spotLight
                position={[0, 10, 10]}
                angle={0.3}
                penumbra={0.5}
                intensity={2}
                castShadow
              />

              {/* Modelo 3D */}
              <Appendix3d
                position={[0, 1, 0]}
                scale={[7, 7, 7]}
                rotation={[Math.PI, 0, 0]}
              />

              {/* Plano de sombra */}
              <mesh
                rotation={[-Math.PI / 2, 0, 0]}
                position={[0, -0.2, 0]}
                receiveShadow
              >
                <planeGeometry args={[20, 20]} />
                <shadowMaterial opacity={0.3} />
              </mesh>

              {/* --- AÑADE AQUÍ TU TEXTO 3D SOLO PARA Prevencion --- */}
              <Text
                position={[0, 6, 0]} // Ajusta altura y posición
                fontSize={0.7} // Tamaño del texto
                anchorX="center"
                anchorY="middle"
                color="white" // Color que prefieras
              >
                Cuidados esenciales
              </Text>

              {/* Controles de cámara */}
              <OrbitControls enablePan={false} />
            </Canvas>
          </motion.div>
        </>
      )}

      {section === "sintomas" && (
        <>
          <motion.section
            className="appendix-text"
            initial={{ x: "-100vw", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ type: "tween", duration: 1.5 }}
          >
            <h2 className="appendix-subtitle">
              {sintomas[sintomaIndex].titulo}
            </h2>
            <p className="appendix-desc">
              {sintomas[sintomaIndex].descripcion}
            </p>

            <div className="navigation-buttons">
              {sintomaIndex > 0 ? (
                <button
                  onClick={() => setSintomaIndex((i) => i - 1)}
                  className="nav-button"
                >
                  ANTERIOR
                </button>
              ) : (
                <button
                  onClick={() => {
                    setSection("main");
                    setSintomaIndex(0);
                  }}
                  className="nav-button"
                >
                  ¿QUÉ ES?
                </button>
              )}
              <button onClick={handleSiguiente} className="nav-button">
                {sintomaIndex < sintomas.length - 1 ? "SIGUIENTE" : "TERMINAR"}
              </button>
            </div>
          </motion.section>

          <motion.div
            className="appendix-3d"
            initial={{ x: "-100vw", opacity: 0 }}
            animate={{ x: -50, opacity: 1 }}
            transition={{ type: "tween", duration: 1.5 }}
          >
            {/* Añadimos onClick al Canvas para cambiar texto */}
            <Canvas
              shadows
              camera={{ position: [1.2, -1, 18], fov: 50 }}
              onClick={handleTextToggle}
              onCreated={({ camera }) => (cameraRef.current = camera)} //  Click en el canvas
            >
              {/* Iluminaciones (3) */}
              <ambientLight intensity={0.6} />
              <directionalLight
                position={[-5, 10, 10]}
                intensity={3}
                castShadow
              />
              <spotLight
                position={[0, 10, 10]}
                angle={0.3}
                penumbra={0.5}
                intensity={2}
                castShadow
              />
              <pointLight position={[0, 5, 5]} intensity={1} castShadow />

              {/* Sombras (2 planos) */}
              <mesh
                rotation={[-Math.PI / 2, 0, 0]}
                position={[0, -0.2, 0]}
                receiveShadow
              >
                <planeGeometry args={[20, 20]} />
                <shadowMaterial opacity={0.3} />
              </mesh>
              <mesh
                rotation={[-Math.PI / 2, 0, 0]}
                position={[0, -0.3, 0]}
                receiveShadow
              >
                <planeGeometry args={[20, 20]} />
                <shadowMaterial opacity={0.6} />
              </mesh>

              {/* Modelo con eventos de mouse 3D (3) */}
              {React.createElement(sintomas[sintomaIndex].Modelo, {
                position: [0, 0, 0],
                scale: [7, 7, 7],
                ref: modelRef,
                onClick: handleModelClick, // 1) onClick
                onPointerEnter: () => setColor("lightblue"), // 2) onPointerEnter
                onWheel: (e) =>
                  (modelRef.current.rotation.x += e.deltaY * 0.001), // 3) onWheel
                color,
                castShadow: true,
                receiveShadow: true,
              })}

              {/* Puestas en escena (2) */}
              <Stars radius={50} depth={50} count={2000} factor={4} />
              <Environment preset="sunset" background={false} />

              {/* Extras */}
              <Sky sunPosition={[100, 20, 100]} />
              <Sparkles count={1000} scale={[10, 10, 10]} />

              {/*** H1 3D: “Appendix” a la izquierda ***/}
              <Html position={[-13, 2.5, 0]}>
                <h1
                  className="appendix-title-3d"
                  style={{ cursor: "pointer" }}
                  onClick={() => {
                    setSection("main");
                    setSintomaIndex(0);
                  }}
                >
                  APPENDIX
                </h1>
              </Html>

              {/*** H1 3D: “SÍNTOMAS” a la derecha ***/}
              <Html position={[5, 2.5, 0]}>
                <h1
                  className="appendix-title-3d"
                  style={{ cursor: "pointer" }}
                  onClick={handleSiguiente}
                >
                  SÍNTOMAS
                </h1>
              </Html>
              {/* Texto 3D con estado de posición y color */}
              <Text
                position={[textPosX, 3.5, 0]} // Se mueve en X de 0 a -2
                fontSize={0.8}
                anchorX="center"
                anchorY="middle"
                color={textColor} // Cambia azul <-> negro
              >
                {sintomas[sintomaIndex].titulo}
              </Text>

              <OrbitControls enablePan={false} />
            </Canvas>
          </motion.div>
        </>
      )}
    </div>
  );
};

export default Appendix;
