import React, { useRef, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Html,Center,Text3D } from "@react-three/drei";
import { Physics, RigidBody } from "@react-three/rapier";
import Ball from "../../models-3d/Ball";
import Court from "../../models-3d/Court";
import quizData from "./quizData";
import useQuizStore from "../../stores/use-quiz-store";


function Floor() {
  return (
    <RigidBody type="fixed">
      <mesh position={[0, -0.5, 0]} receiveShadow>
        <boxGeometry args={[50, 1, 50]} />
        <meshStandardMaterial color="#2d3436" />
      </mesh>
    </RigidBody>
  );
}

export default function QuizBallGame() {
  const ballRef = useRef();
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [locked, setLocked] = useState(false);
  const { incrementQuizProgress } = useQuizStore();

  const question = quizData[currentQuestionIndex];

  const handleAnswer = (isCorrect) => {
    if (locked) return;
    setLocked(true);
    incrementQuizProgress(isCorrect);

    setTimeout(() => {
      if (currentQuestionIndex + 1 < quizData.length) {
        setCurrentQuestionIndex((prev) => prev + 1);
      } else {
        alert("🎉 ¡Has completado el quiz!");
      }
      ballRef.current?.resetBall();
      setLocked(false);
    }, 1000);
  };

  const positions = [-6, -2, 2, 6];
  const colors = ["#e74c3c", "#2ecc71", "#3498db", "#9b59b6"];

  return (
    <div style={{ width: "100%", height: "100vh" }}>
      <Canvas camera={{ position: [0, 6, 14], fov: 50 }} shadows>
        <ambientLight intensity={0.5} />
        <directionalLight position={[5, 10, 5]} intensity={1.5} castShadow />
        
        <Physics>
          
          <Ball ref={ballRef} />
          <Floor />

          {question.options.map((opt, index) => (
            <Court
              key={index}
              position={[positions[index], 0, -12]}
              color={colors[index]}
              ballRef={ballRef}
              label={opt}
              isCorrect={index === question.correctIndex}
              onAnswered={handleAnswer}
            />
          ))}
        </Physics>

        {/* Pregunta actual sobre el canvas */}
        <Text3D
          font="fonts/alice.json"
          position={[-6, 5, -10]} 
          bevelEnabled
          bevelSize={0.01}
          bevelThickness={0.02}
          height={0.01}
          lineHeight={0.8}
          letterSpacing={0.02}
          size={0.5}
          color="#db1212ff"  // Naranja oscuro (DarkOrange)
          fillMaterial={{
          color: "#ca1313ff",  // Marrón muy oscuro (para relleno o sombras)
            metalness: 0.5,    // Añade un toque metálico si quieres
            roughness: 0.7,
          }}
        >
          {question.question}
          <meshStandardMaterial color="white" />
        </Text3D>

        <OrbitControls />
      </Canvas>
    </div>
  );
}
