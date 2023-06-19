
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore/lite'

const firebaseConfig = {
  apiKey: "AIzaSyApyWR5AY-wK2qaosjAEwU1luUSsHFnYa0",
  authDomain: "tiktok---jornada-852f3.firebaseapp.com",
  projectId: "tiktok---jornada-852f3",
  storageBucket: "tiktok---jornada-852f3.appspot.com",
  messagingSenderId: "191012176494",
  appId: "1:191012176494:web:dbb9bf5b457d3a6400dc7f"
};


const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;