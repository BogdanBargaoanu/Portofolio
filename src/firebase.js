import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
import { collection, addDoc, getDocs } from "@firebase/firestore"; // Perbarui ini


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "portofolio-fad5e.firebaseapp.com",
  projectId: "portofolio-fad5e",
  storageBucket: "portofolio-fad5e.firebasestorage.app",
  messagingSenderId: "17982862890",
  appId: "1:17982862890:web:7fb887f3c55f31c857f553",
  measurementId: "G-WXHQ2C5T0E"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db, collection, addDoc };