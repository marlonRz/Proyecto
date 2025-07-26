import "./Diverticulosis.css";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Html, Text } from "@react-three/drei";


import Diver from "../../../models-3d/Diver";
import Sintomas_Diver from "../../../models-3d/Sintomas_Diver";
import Treatment_Diver from "../../../models-3d/Treatment_Diver";
import Video3DPlane from "./video.jsx"

import { motion } from "framer-motion";
import { useState } from "react";
import DiseaseNavigation from "../../../components/disease_navegation/DiseaseNavegation";
import Floor from "../../../models-3d/Floor";
import Title from "./text/Title";
import Staging1 from "./staging/Staging1";
import Prevention_Diver from "../../../models-3d/Prevention_Diver";
import Interactive from "../../../components/Events/Diverticulosis/Interactive";

function Diverticulosis() {
  const [seccion, setSeccion] = useState("que-es");

  const contenido = {
    "que-es": {
      titulo: "¿QUÉ ES LA DIVERTICULOSIS?",
      descripcion: `Los divertículos intestinales son pequeñas bolsas o sáculos que protruyen desde 
  la luz del intestino hacia el exterior de éste. El lugar donde se encuentran con mayor frecuencia
   es en una zona del colon izquierdo llamada sigma.`,
      objeto3D: (
        <Interactive
          position={[0, 0.6, 0]}
          scale={[3, 3, 3]}
          rotation={[0, Math.PI, 0]}
        >
          <Diver />
          <Video3DPlane />
        </Interactive>
        
      ),
      video:(
        <Video3DPlane />
      ),
      light: (
        <directionalLight
          position={[1, 5, 10]}
          intensity={7}
          castShadow
          shadow-mapSize-width={124}
          shadow-mapSize-height={124}
        />
      ),
      html: (
        <>
          <Title title={"Que es"} />
          <Html position={[-1.8, 0, 0]}>
            <div style={{ color: "black", fontWeight: "bold", background: "white", padding: "5px", borderRadius: "5px" }}>
              Diverticulosis
            </div>
          </Html>
        </>
      ),
      texto: (
        <Text
          position={[1, 2, 1]}
          rotation={[0, -0.5, 0]}
          fontSize={0.2}
          color="hotpink"
          anchorX="center"
          anchorY="middle"
        >
          Enfermedad Intestino
        </Text>
      ),
      staging: <Staging1 />,
    },

    sintomas: {
      titulo: "SÍNTOMAS DE LA DIVERTICULOSIS",
      descripcion: `
        Hinchazón,
        Estreñimiento o diarrea,
        Calambres o dolor en la parte inferior del abdomen y
        Pequeñas cantidades de sangre en las heces o en el papel higiénico`,
      objeto3D: (
        <Interactive
          position={[0, 0.6, 0]}
          scale={[3, 3, 3]}
          rotation={[0, Math.PI, 0]}
        >
          <Sintomas_Diver />
        </Interactive>
      ),
      light: (
        <directionalLight
          position={[1, 5, 10]}
          intensity={25}
          castShadow
          shadow-mapSize-width={200}
          shadow-mapSize-height={200}
        />
      ),
      html: (<>
        <Title title={"Sintomas"} /> <Html position={[-1.8, 0, 0]}>
          <div style={{ color: "black", fontWeight: "bold", background: "white", padding: "5px", borderRadius: "5px" }}>
            Diverticulosis
          </div>
        </Html>
      </>
      ),
      texto: (
        <Text
          position={[1, 2, 1]}
          rotation={[0, -0.5, 0]}
          fontSize={0.2}
          color="hotpink"
          anchorX="center"
          anchorY="middle"
        >
          Enfermedad Intestino
        </Text>
      ),
      staging: <Staging1 />,
    },
    tratamiento: {
      titulo: "TRATAMIENTO DE LA DIVERTICULOSIS",
      descripcion: `El tratamiento puede incluir una dieta rica en fibra, líquidos y, en algunos casos,
      antibióticos si hay infección.`,
      objeto3D: (
        <Interactive
          position={[-0.8, -0.5, 1]}
          scale={[3, 3, 3]}
          rotation={[0, -1, 0]}
        >
          <Treatment_Diver />
        </Interactive>
      ),
      light: (
        <directionalLight
          position={[0, 0, 0]}
          intensity={0}
          castShadow
          shadow-mapSize-width={100}
          shadow-mapSize-height={100}
        />
      ),
      html: (<> <Title title={"Tratamiento"} />
        <Html position={[-1.8, 0, 0]}>
          <div style={{ color: "black", fontWeight: "bold", background: "white", padding: "5px", borderRadius: "5px" }}>
            Diverticulosis
          </div>
        </Html>
      </>
      ),
      texto: (
        <Text
          position={[1, 2, 1]}
          rotation={[0, -0.5, 0]}
          fontSize={0.2}
          color="hotpink"
          anchorX="center"
          anchorY="middle"
        >
          Enfermedad Intestino
        </Text>
      ),
      staging: <Staging1 />,
    },
    prevencion: {
      titulo: "PREVENCIÓN DE LA DIVERTICULOSIS",
      descripcion: `Mantener una dieta alta en fibra, hidratarse adecuadamente y hacer ejercicio regularmente.`,
      objeto3D: (
        <Prevention_Diver position={[0, 0.5, 0]} scale={[1.2, 1.2, 1.2]} />
      ),
      light: (
        <directionalLight
          position={[0, 0, 0]}
          intensity={0}
          castShadow
          shadow-mapSize-width={100}
          shadow-mapSize-height={100}
        />
      ),
      html: (<><Title title={"Prevencion"} />
           <Html position={[-1.8, 0, 0]}>
            <div style={{ color: "black", fontWeight: "bold", background: "white", padding: "5px", borderRadius: "5px" }}>
              Diverticulosis
            </div>
          </Html>
        </>
      ),
  texto: (
    <Text
      position={[1, 2, 1]}
      rotation={[0, -0.5, 0]}
      fontSize={0.2}
      color="hotpink"
      anchorX="center"
      anchorY="middle"
    >
      Enfermedad Intestino
    </Text>
  ),
    staging: <Staging1 />,
    },
  };

return (
  <div className="place-home">
    <div className="information-start">
      <motion.section
        className="section-start"
        initial={{ x: "-100vw", opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ type: "ease", duration: 2 }}
      >
        <h1 className="information-start-h1">DIVERTICULOSIS</h1>
        <h2 className="information-start-h2">{contenido[seccion].titulo}</h2>
        <p className="information-start-p">
          {contenido[seccion].descripcion}
        </p>

        <DiseaseNavigation setSeccion={setSeccion} activeSection={seccion} />
      </motion.section>

      <motion.div
        className="object-3d"
        initial={{ x: "80vh", opacity: 0 }}
        animate={{ x: 0, opacity: 1.6 }}
        transition={{ type: "tween", duration: 1 }}
      >
        <Canvas
          camera={{ position: [-2.5, 0, 3.5], fov: 60 }}
          shadows
          onCreated={({ gl }) => {
            gl.domElement.tabIndex = 0;
            gl.domElement.focus();
          }}
        >
          <ambientLight intensity={2} />
          <pointLight position={[0, 0, 0]} intensity={15} />
          <Floor position={[0, 0, 0]} />
          {contenido[seccion].light}
          {contenido[seccion].objeto3D}
          {contenido[seccion].video}
          {contenido[seccion].html}
          {contenido[seccion].texto}
          {contenido[seccion].staging}
          <OrbitControls />
        </Canvas>
      </motion.div>
    </div>
  </div>
);
}

export default Diverticulosis;
