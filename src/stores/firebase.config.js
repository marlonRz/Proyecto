// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA-FTnbwZEx-gSCD-yz3i-9w5twmU-SuVo",
  authDomain: "sesion-3-a59b1.firebaseapp.com",
  projectId: "sesion-3-a59b1",
  storageBucket: "sesion-3-a59b1.firebasestorage.app",
  messagingSenderId: "869735919349",
  appId: "1:869735919349:web:2da84a6c6de35d63ae5fbc"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
