// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAfNmeGAEdE49ioqvVA4tZlNqoIYxDH1I4",
  authDomain: "react-chat-app-6644e.firebaseapp.com",
  projectId: "react-chat-app-6644e",
  storageBucket: "react-chat-app-6644e.appspot.com",
  messagingSenderId: "217269587951",
  appId: "1:217269587951:web:ae44958d625f9e60a4301a",
  measurementId: "G-YLKKZ3QCHN",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const db = getFirestore(app);
