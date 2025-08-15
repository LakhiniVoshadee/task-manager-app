// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCwUE5SOGfNe2HvE5WzydLx__7xMc2PvFk",
  authDomain: "task-manager-c6d73.firebaseapp.com",
  projectId: "task-manager-c6d73",
  storageBucket: "task-manager-c6d73.firebasestorage.app",
  messagingSenderId: "1080290203348",
  appId: "1:1080290203348:web:2bc7d3487b68179af0cd41",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
