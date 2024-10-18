// Import the functions you need from the SDKs you need
import { getAuth } from "@react-native-firebase/auth";
import { getStateFromPath } from "@react-navigation/native";
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAQ2HGaih-ul55zjzmIntVGRjVJ7ubnUG8",
  authDomain: "lipa-s.firebaseapp.com",
  projectId: "lipa-s",
  storageBucket: "lipa-s.appspot.com",
  messagingSenderId: "1004400319686",
  appId: "1:1004400319686:web:cb9c64fbeed7b1ba850bc7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);
export{app, auth, db, storage}