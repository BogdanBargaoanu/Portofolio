import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { collection, addDoc } from "@firebase/firestore";

const firebaseConfig = {
    apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
    authDomain: "portofolio-fad5e.firebaseapp.com",
    projectId: "portofolio-fad5e",
    storageBucket: "portofolio-fad5e.firebasestorage.app",
    messagingSenderId: "17982862890",
    appId: "1:17982862890:web:7fb887f3c55f31c857f553",
    measurementId: "G-WXHQ2C5T0E"
};

// Initialize with a unique name
const app = initializeApp(firebaseConfig, 'comments-app');
const db = getFirestore(app);
const storage = getStorage(app);

export { db, storage, collection, addDoc };