// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCDsAtiKEcsyiWX6d0qiTIInOqOT8pOJNw",
  authDomain: "react-auth-1c98f.firebaseapp.com",
  projectId: "react-auth-1c98f",
  storageBucket: "react-auth-1c98f.appspot.com",
  messagingSenderId: "217189106307",
  appId: "1:217189106307:web:76535346579d04cd8d51b6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth (app)