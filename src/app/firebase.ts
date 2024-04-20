// Import the functions you need from the SDKs you need
const { initializeApp } = require("firebase/app");
// import { initializeApp } from "firebase/app";
// const { getAnalytics } = require("firebase/analytics");
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBZ7DkeYiqLbbwzuGhrPCCFytZI7_RVugI",
  authDomain: "learn-lingo-f84ed.firebaseapp.com",
  projectId: "learn-lingo-f84ed",
  storageBucket: "learn-lingo-f84ed.appspot.com",
  messagingSenderId: "286122930112",
  appId: "1:286122930112:web:0722cda00d6b88a7706225",
  measurementId: "G-7ND0CH9FYK",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
