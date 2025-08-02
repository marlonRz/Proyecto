// src/stores/getScores.js
import { collection, getDocs, query, orderBy, limit } from "firebase/firestore";
import { db } from "./firebase.config";

export const getTopScores = async () => {
  try {
    const q = query(collection(db, "scores"), orderBy("score", "desc"), limit(10));
    const querySnapshot = await getDocs(q);
    return querySnapshot.docs.map((doc) => doc.data());
  } catch (error) {
    console.error("Error al obtener los puntajes:", error);
    return [];
  }
};
