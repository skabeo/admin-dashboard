import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API,
  authDomain: "auth-production-1581c.firebaseapp.com",
  projectId: "auth-production-1581c",
  storageBucket: "auth-production-1581c.appspot.com",
  messagingSenderId: "586447003385",
  appId: "1:586447003385:web:410bfdafac5b77efe40c28"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const storage = getStorage(app);

export const auth = getAuth();
