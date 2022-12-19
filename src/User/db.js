import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// Firebase: Replace the following with your app's Firebase project configuration
// See: https://firebase.google.com/docs/web/learn-more#config-object
const firebaseConfig = {
    apiKey: "AIzaSyC8V090i1kxPrlgUTAxX9Cz_ixysQSxkJc",
    authDomain: "flip-docs-1f9a3.firebaseapp.com",
    projectId: "flip-docs-1f9a3",
    storageBucket: "flip-docs-1f9a3.appspot.com",
    messagingSenderId: "137274289667",
    appId: "1:137274289667:web:62b379dd6ad0ece47be836",
    measurementId: "G-T587HH4XRS"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);




// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);
export const auth = getAuth(app);
