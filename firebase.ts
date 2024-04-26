// import config from "./config";
import admin from "firebase-admin";
import serviceAccount from "./serviceAccountKey.json";

const asAString = JSON.parse(JSON.stringify(serviceAccount));
console.log(typeof asAString);
// import * as fs from "fs";
// import * as path from "path";

// console.log(__dirname);

// const serviceAccount = fs.readFile(path.join(__dirname, "serviceAccountKey.json"), "utf8", (error, data) => {
//   console.log(data);
// });

export const firebaseApp = admin.initializeApp({
  credential: admin.credential.cert(asAString),
  databaseURL: "https://learn-lingo-f84ed-default-rtdb.europe-west1.firebasedatabase.app",
});
