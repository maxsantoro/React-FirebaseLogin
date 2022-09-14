import { createContext, useContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  GoogleAuthProvider,
  signInWithPopup,
  sendPasswordResetEmail
} from "firebase/auth";
import { auth } from "../firebase";



export const authcontext = createContext();

export const useAuth = () => {
  const context = useContext(authcontext);
  if (!context) throw new Error(`There is no auth provider`);
  return context;
};

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const signup = (email, password) =>
    createUserWithEmailAndPassword(auth, email, password);

  const login = async (email, password) =>
    signInWithEmailAndPassword(auth, email, password);

  const logout = () => signOut(auth);

  const loginWithGoogle = () => {
    const googleProvider = new GoogleAuthProvider();
    return signInWithPopup(auth, googleProvider);
  };
  const resetPassword = (email) =>{
    sendPasswordResetEmail(auth,email)

  }

  useEffect(() => {
    const unsuscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
    return () => unsuscribe();
  }, []);

  //con el return de abajo exporto la funcion a todo el contexto de los children para que puedan
  //aceder a en este caso VALUE
  return (
    <authcontext.Provider
      value={{ signup, login, user, logout, loading, loginWithGoogle,resetPassword }}
    >
      {children}
    </authcontext.Provider>
  );
}
