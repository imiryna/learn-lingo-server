import dotenv from "dotenv";

dotenv.config();

const { DATABASE_URL } = process.env;

const firebaseConfig = {
  databaseURL: DATABASE_URL,
};

export default firebaseConfig;
