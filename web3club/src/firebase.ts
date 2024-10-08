import { initializeApp } from "firebase/app";
import { getFirestore, Firestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD7CvPH3rEdchtkw2fgh6m4IvxXlG0mkxs",
  authDomain: "wdao-54ea8.firebaseapp.com",
  projectId: "wdao-54ea8",
  storageBucket: "wdao-54ea8.appspot.com",
  messagingSenderId: "1057085108040",
  appId: "1:1057085108040:web:553ae4d6c61b3edfc7cd7d",
  measurementId: "G-9JHDJ5GC1Y",
};

// Initialize Firebase App
const app = initializeApp(firebaseConfig);

// Initialize Firestore
const db: Firestore = getFirestore(app);

export { db };
