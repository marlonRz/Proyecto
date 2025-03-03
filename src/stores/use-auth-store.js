import { create } from "zustand";
import { onAuthStateChanged, GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";
import {auth} from "../firebase.config.js"

const provider = new GoogleAuthProvider();

const useAuthStore = create((set) => {
    const observeAuthState = () => {
        onAuthStateChanged(auth, (user) =>{
            user? set({userLooged: user}) : set({ userLooged:null});
        });
    };
    observeAuthState();
  return{
    userLooged: null,
    loginGoogleWithPopUp: async () =>{
        try {
            return await signInWithPopup(auth, provider);
        } catch (error){
            console.error("error logging in:",error);
        }
    },
    logout: async () => {
        return await signOut(auth)
        .then(() => set({ userLooged:null}))
        .catch((error)=> console.error("Error logging out:",error));
    }
  }
});

export default useAuthStore;
