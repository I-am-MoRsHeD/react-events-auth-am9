

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD0N7lBS-e99orShNoPBOGlr8N_5XI18Sc",
  authDomain: "react-events-auth-am9.firebaseapp.com",
  projectId: "react-events-auth-am9",
  storageBucket: "react-events-auth-am9.appspot.com",
  messagingSenderId: "1095005093667",
  appId: "1:1095005093667:web:2a3c2c5cf7da567d6c5696"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;
