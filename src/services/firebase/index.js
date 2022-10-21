import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyC4RkscwHtTcjvSO6PIALQuHni8_PaC1Co",
  authDomain: "backend37450.firebaseapp.com",
  projectId: "backend37450",
  storageBucket: "backend37450.appspot.com",
  messagingSenderId: "16031962299",
  appId: "1:16031962299:web:ca3d1b3ced949b9842459e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)