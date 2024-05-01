import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
require('dotenv').config()

const firebaseConfig = {
  apiKey: process.env.API_KEY,
  authDomain: "moteballs.firebaseapp.com",
  projectId: "moteballs",
  storageBucket: "moteballs.appspot.com",
  messagingSenderId: process.env.MESSAGING_SENDER_ID,
  appId: process.env.APP_ID
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export {
    db
}