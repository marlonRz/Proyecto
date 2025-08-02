import React, { useRef, useState, useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Text3D } from "@react-three/drei";
import { Physics, RigidBody } from "@react-three/rapier";

import Ball from "../../models-3d/Ball";
import Court from "../../models-3d/Court";
import quizData from "./quizData";
import useQuizStore from "../../stores/use-quiz-store";
import saveScore from "../../stores/saveScore";

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
  const { incrementQuizProgress, clearQuiz, quiz } = useQuizStore();
  const [hasSaved, setHasSaved] = useState(false);

  const question = quizData[currentQuestionIndex];
  const positions = [-6, -2, 2, 6];
  const colors = ["#e74c3c", "#2ecc71", "#3498db", "#9b59b6"];

  const handleAnswer = (isCorrect) => {
    if (locked) return;
    setLocked(true);

    incrementQuizProgress(isCorrect);

    setTimeout(() => {
      const next = currentQuestionIndex + 1;

      if (next < quizData.length) {
        setCurrentQuestionIndex(next);
      } else {
        // Quiz terminado
        const name = prompt("🎉 ¡Has completado el quiz! Ingresa tu nombre:");
        if (name && !hasSaved) {
          saveScore(name, quiz);
          setHasSaved(true);
        }

        // Reiniciar quiz automáticamente
        clearQuiz();
        setCurrentQuestionIndex(0);
        setHasSaved(false);
      }

      ballRef.current?.resetBall();
      setLocked(false);
    }, 1000);
  };

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

        {/* Pregunta actual en texto 3D */}
        <Text3D
          font="/fonts/alice.json"
          position={[-6, 5, -10]}
          size={0.5}
          height={0.05}
          bevelEnabled
          bevelThickness={0.01}
          bevelSize={0.01}
        >
          {question.question}
          <meshStandardMaterial color="white" />
        </Text3D>

        <OrbitControls />
      </Canvas>
    </div>
  );
}