
import { initializeApp} from "firebase/app";
import { initializeAuth } from "firebase/auth";
import { getFirestore} from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyATWXUKV5mNCCgyRplHpy94UIQM8ki45fI",
  authDomain: "dennife523.firebaseapp.com",
  projectId: "dennife523",
  storageBucket: "dennife523.appspot.com",
  messagingSenderId: "734039134348",
  appId: "1:734039134348:web:0b7cc48ed2325383532ba9",
  measurementId: "G-Q4RC47D2WV"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = initializeAuth(app)

export { app, db, auth }