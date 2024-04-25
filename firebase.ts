import config from "./config";
import admin from "firebase-admin";

import * as fs from "fs";
import * as path from "path";

const serviceAccount = fs.readFile(path.join(__dirname, "../../client/index.html"), "utf8", (error, data) => {
  // ...
});

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://learn-lingo-f84ed-default-rtdb.europe-west1.firebasedatabase.app",
});
