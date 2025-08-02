// src/firebase/firebase.config.js

import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Configuración de Firebase
const firebaseConfig = {
  apiKey: "AIzaSyA-FTnbwZEx-gSCD-yz3i-9w5twmU-SuVo",
  authDomain: "sesion-3-a59b1.firebaseapp.com",
  projectId: "sesion-3-a59b1",
  storageBucket: "sesion-3-a59b1.appspot.com", // ← corrección aquí también
  messagingSenderId: "869735919349",
  appId: "1:869735919349:web:f43f53d0acfe0859ae5fbc"
};

// Inicializa Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

// ✅ Exporta por defecto y también nombrados (opcional)
export { auth, db };
export default db;
