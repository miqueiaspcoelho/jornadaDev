// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore/lite';
const firebaseConfig = {
  apiKey: "AIzaSyA7_qZeQTFfpoILaTxd0j9lHznWh3bTuTM",
  authDomain: "tiktok---jornadadev-b05fb.firebaseapp.com",
  projectId: "tiktok---jornadadev-b05fb",
  storageBucket: "tiktok---jornadadev-b05fb.appspot.com",
  messagingSenderId: "429145210372",
  appId: "1:429145210372:web:fb6940d5bfcb0c56d27f51"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;