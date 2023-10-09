// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from "firebase/auth"
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/storage';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA3J9qw1GAjn5dL4V-ZV09SrsO2vDmkETE",
  authDomain: "anwesbite.firebaseapp.com",
  projectId: "anwesbite",
  storageBucket: "anwesbite.appspot.com",
  messagingSenderId: "433721607577",
  appId: "1:433721607577:web:e42ae4547df240177a3f08",
  measurementId: "G-BDTWBF53L7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const GoogleProvider = new GoogleAuthProvider();
