// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBmqjuxpTQE8kUxf7ZmNixQ5fIOK0wqJGc",
  authDomain: "clone-4cdb2.firebaseapp.com",
  projectId: "clone-4cdb2",
  storageBucket: "clone-4cdb2.appspot.com",
  messagingSenderId: "996627735347",
  appId: "1:996627735347:web:b8c4b18ff9c13605841446",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

// Initialize Firestore and Auth
const db = getFirestore(firebaseApp);
const auth = getAuth(firebaseApp);

export { db, auth };
