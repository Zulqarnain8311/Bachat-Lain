// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA1vQyvjDs4kGXb-1AvZ0JX3bra8GkRrxA",
  authDomain: "bachat-lo.firebaseapp.com",
  projectId: "bachat-lo",
  storageBucket: "bachat-lo.appspot.com",
  messagingSenderId: "756158832218",
  appId: "1:756158832218:web:207639a0bc41b59ee74263",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export { db, auth };
