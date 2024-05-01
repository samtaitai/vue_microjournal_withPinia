import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDEE-kD4umYbPuKor7TKT6BGaqehT-r9hg",
  authDomain: "moteballs.firebaseapp.com",
  projectId: "moteballs",
  storageBucket: "moteballs.appspot.com",
  messagingSenderId: "696956159865",
  appId: "1:696956159865:web:cefe3f0a5f190262c111a8"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export {
    db
}