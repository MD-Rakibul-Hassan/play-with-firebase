// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBXCiazXkitNL4IuTpAgUidFqBhYSWOtlc",
  authDomain: "first-firebase-9e3bb.firebaseapp.com",
  projectId: "first-firebase-9e3bb",
  storageBucket: "first-firebase-9e3bb.appspot.com",
  messagingSenderId: "32336203761",
  appId: "1:32336203761:web:ae50d006095662a6defe50",
  measurementId: "G-B6TRJK10Z6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);