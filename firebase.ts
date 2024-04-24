// const { initializeApp } = require("firebase/app");
import { initializeApp } from "firebase/app";
import admin from "firebase-admin";

// import { serviceAccount } from "path/to/serviceAccountKey.json";

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://learn-lingo-f84ed-default-rtdb.europe-west1.firebasedatabase.app",
});

import firebaseConfig from "./config";
// const { getAnalytics } = require("firebase/analytics");

// Initialize Firebase
export const firebase = initializeApp(firebaseConfig);
