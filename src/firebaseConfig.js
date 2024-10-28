// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAVQ_7CzrPj5GgqYyTY6K243RilGZ7QpbI",
  authDomain: "tr-team-1a547.firebaseapp.com",
  projectId: "tr-team-1a547",
  storageBucket: "tr-team-1a547.appspot.com",
  messagingSenderId: "156013179869",
  appId: "1:156013179869:web:7ac3ada89ec1f684ddfc34",
  measurementId: "G-VEBF091SK2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);