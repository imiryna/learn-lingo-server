// const { initializeApp } = require("firebase/app");
import { initializeApp } from "firebase/app";
import firebaseConfig from "./config";
// const { getAnalytics } = require("firebase/analytics");

// Initialize Firebase
export const firebase = initializeApp(firebaseConfig);
