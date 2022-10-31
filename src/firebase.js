// Import the functions you need from the SDKs you need
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDDtWlfU4UdAmbjJGxW8-ySsJA7F0-_GXw",
  authDomain: "insta-reel-clone-bf49f.firebaseapp.com",
  projectId: "insta-reel-clone-bf49f",
  storageBucket: "insta-reel-clone-bf49f.appspot.com",
  messagingSenderId: "37085036620",
  appId: "1:37085036620:web:136c383e7633cb664934e9",
  measurementId: "G-729MJVLJPP",
};

// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
