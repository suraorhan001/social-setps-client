// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAuGqtVZoq3Zw0285eSvaLfVAUxMc6Eer4",
  authDomain: "social-platforms-f1dd4.firebaseapp.com",
  projectId: "social-platforms-f1dd4",
  storageBucket: "social-platforms-f1dd4.firebasestorage.app",
  messagingSenderId: "996697118358",
  appId: "1:996697118358:web:f933424a34405a41c694b7",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
