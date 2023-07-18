import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore/lite";
import { GoogleAuthProvider, getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBQE6Th_BbsovoJZLZMLAeSHRuqI1_PB-w",
  authDomain: "kenshu-system.firebaseapp.com",
  projectId: "kenshu-system",
  storageBucket: "kenshu-system.appspot.com",
  messagingSenderId: "975415282568",
  appId: "1:975415282568:web:3b434adb40346576a2483d",
  measurementId: "G-JKS2L8N6E1",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { auth, provider, db };
