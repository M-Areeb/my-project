// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBYXLccpxnRXs7RnhOqayuKmSYkca2-qe4",
  authDomain: "semiskillworker.firebaseapp.com",
  projectId: "semiskillworker",
  storageBucket: "semiskillworker.firebasestorage.app",
  messagingSenderId: "441072262176",
  appId: "1:441072262176:web:2ce4d0e7eec32c4348b045",
  measurementId: "G-1K8RH0DN4J"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);