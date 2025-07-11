import React, { useState, useRef } from "react";
import "./AppendixView.css";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Environment, Stars, Html } from "@react-three/drei";
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
  const [color, setColor] = useState("white"); // Para evento de mouse
  const modelRef = useRef();

  // Evento de teclado: cambiar color con la tecla "c"
  React.useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "c") {
        setColor(color === "white" ? "orange" : "white");
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [color]);

  const handleSiguiente = () => {
    if (sintomaIndex < sintomas.length - 1) {
      setSintomaIndex(sintomaIndex + 1);
    } else {
      setSection("main");
      setSintomaIndex(0);
    }
  };

  const handleSintomas = () => {
    setSection("sintomas");
    setSintomaIndex(0);
  };

  // Evento de mouse: click para cambiar color
  const handleModelClick = () => {
    setColor(color === "white" ? "orange" : "white");
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
              <button className="nav-button">TRATAMIENTO</button>
              <button className="nav-button">PREVENCIÓN</button>
            </div>
          </motion.section>

          <motion.div
            className="appendix-3d"
            initial={{ x: "100vw", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ type: "tween", duration: 1.5 }}
          >
            <Canvas shadows camera={{ position: [1.2, -1, 18], fov: 50 }}>
              {/* Iluminación 1: Luz ambiental */}
              <ambientLight intensity={0.5} />
              {/* Iluminación 2: Luz direccional suave */}
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
              <Appendix3d position={[0, 1, 0]} scale={[7, 7, 7]} />

              {/* Sombra suave */}
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
                  onClick={() => setSintomaIndex(sintomaIndex - 1)}
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
            initial={{ x: "100vw", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ type: "tween", duration: 1.5 }}
          >
            <Canvas shadows camera={{ position: [1.2, -1, 18], fov: 50 }}>
              {/* Iluminación 1: Luz ambiental */}
              <ambientLight intensity={0.7} />
              {/* Iluminación 2: Luz direccional dura */}
              <directionalLight
                position={[-5, 10, 10]}
                intensity={3}
                castShadow
                shadow-mapSize-width={2048}
                shadow-mapSize-height={2048}
                shadow-camera-far={50}
                shadow-camera-left={-10}
                shadow-camera-right={10}
                shadow-camera-top={10}
                shadow-camera-bottom={-10}
              />
              {/* Sombra dura */}
              <mesh
                rotation={[-Math.PI / 2, 0, 0]}
                position={[0, -0.2, 0]}
                receiveShadow
              >
                <planeGeometry args={[20, 20]} />
                <shadowMaterial opacity={0.6} />
              </mesh>

              {/* Evento de mouse: click para cambiar color */}
              {React.createElement(sintomas[sintomaIndex].Modelo, {
                position: [0, 0, 0],
                scale: [7, 7, 7],
                ref: modelRef,
                onClick: handleModelClick,
                color: color,
              })}

              {/* Elemento HTML 3D */}
              <Html position={[0, 2, 0]}>
                <h1
                  style={{
                    color: "--color - tertiary",
                    background: "rgba(255,255,255,0.85)",
                    padding: "0.5rem 1.5rem",
                    borderRadius: "12px",
                    fontSize: "2rem",
                    fontWeight: "bold",
                    boxShadow: "0 2px 8px rgba(0,0,0,0.15)",
                    margin: 0,
                  }}
                >
                  SÍNTOMAS
                </h1>
              </Html>

              {/* Puesta en escena: estrellas y environment */}
              <Stars radius={50} depth={50} count={2000} factor={4} />
              <Environment preset="sunset" />

              <OrbitControls enablePan={false} />
            </Canvas>
          </motion.div>
        </>
      )}
    </div>
  );
};

export default Appendix;