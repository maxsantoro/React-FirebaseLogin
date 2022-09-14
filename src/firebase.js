//credenciales 

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
/* import { getAnalytics } from "firebase/analytics"; */
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCfgRamQ3bSiBRS5CeCjSJQDLLmdKhgVd0",
  authDomain: "react-fb-auth-d348a.firebaseapp.com",
  projectId: "react-fb-auth-d348a",
  storageBucket: "react-fb-auth-d348a.appspot.com",
  messagingSenderId: "379466467850",
  appId: "1:379466467850:web:2715bfd48a273df98f2df3",
  measurementId: "G-S2YM13D4LM"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
/* const analytics = getAnalytics(app); */