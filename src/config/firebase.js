
import { initializeApp } from "firebase/app";
import { initializeAuth } from "firebase/auth";
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyAzoA9RFW6MwdLhGYEekcwW6YuC4b-sQxI",
  authDomain: "deniffeifal5.firebaseapp.com",
  projectId: "deniffeifal5",
  storageBucket: "deniffeifal5.appspot.com",
  messagingSenderId: "533139141433",
  appId: "1:533139141433:web:c0975bf83ee72ff3e76ee8",
  measurementId: "G-H5KT7D4C1X"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = initializeAuth(app)

export { app, db, auth }