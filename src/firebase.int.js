// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
 import {getAuth} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD6ha4z_kGT-tVTZv1kqOaShIrP0CMVpC4",
  authDomain: "ema-jon-resorce.firebaseapp.com",
  projectId: "ema-jon-resorce",
  storageBucket: "ema-jon-resorce.appspot.com",
  messagingSenderId: "552134037629",
  appId: "1:552134037629:web:67e25db8b8a65f7566e114"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
 const auth =getAuth(app);
 export default auth;