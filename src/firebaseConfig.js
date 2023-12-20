// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { addDoc, collection, getFirestore } from 'firebase/firestore';
const firebaseConfig = {
    apiKey: "AIzaSyAjfd9Mop3Gm38xVuYaubFDHF-KdBlZP7Q",
    authDomain: "resume-1bf6e.firebaseapp.com",
    projectId: "resume-1bf6e",
    storageBucket: "resume-1bf6e.appspot.com",
    messagingSenderId: "131516935909",
    appId: "1:131516935909:web:c8b5d27c243a31bd12ae0c",
    measurementId: "G-BSYJ9MM6Y8"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const database = getFirestore(app);
export const UserCollection = collection(database, 'users');

export const addUser = async (email, password, role) => {
    addDoc(UserCollection, { email, password, role });
}


