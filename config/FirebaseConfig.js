// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: "convoconnect-eab9e.firebaseapp.com",
  projectId: "convoconnect-eab9e",
  storageBucket: "convoconnect-eab9e.appspot.com",
  messagingSenderId: "943055103960",
  appId: "1:943055103960:web:ac30090fd5c5fba90bb4ad",
  measurementId: "G-4JEV3H7PDE"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
