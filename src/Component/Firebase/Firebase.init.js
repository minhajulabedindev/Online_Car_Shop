// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import firebaseConfig from "./Firebase.config";

const initializeFirebaseapp = () => {
  initializeApp(firebaseConfig);
};
export default initializeFirebaseapp;
