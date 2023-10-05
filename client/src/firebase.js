// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "real-estate-38801.firebaseapp.com",
  projectId: "real-estate-38801",
  storageBucket: "real-estate-38801.appspot.com",
  messagingSenderId: "842502097805",
  appId: "1:842502097805:web:387db26092c4d34720cbc4",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
