import config from "./config";
import admin from "firebase-admin";

// import { serviceAccount } from "path/to/serviceAccountKey.json";

const serviceAccount = null;

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://learn-lingo-f84ed-default-rtdb.europe-west1.firebasedatabase.app",
});
