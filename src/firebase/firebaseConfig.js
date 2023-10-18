// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCpowT_13FB6JXApAiMOmYfOSryrbS6HVY",
  authDomain: "nexus-brand-store.firebaseapp.com",
  projectId: "nexus-brand-store",
  storageBucket: "nexus-brand-store.appspot.com",
  messagingSenderId: "501831370158",
  appId: "1:501831370158:web:638fdbb43724551dd9743f",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);
export default auth;
