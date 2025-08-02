// src/stores/saveScore.js
import { collection, addDoc, Timestamp } from "firebase/firestore";
import { db } from "./firebase.config"; // Verifica que esta ruta sea correcta

const saveScore = async (name, quiz) => {
  try {
    await addDoc(collection(db, "scores"), {
      name,
      score: quiz.correctAnswers,
      incorrect: quiz.incorrectAnswers,
      timestamp: Timestamp.now(),
    });
  } catch (error) {
    console.error("Error guardando el puntaje:", error);
  }
};

export default saveScore;
