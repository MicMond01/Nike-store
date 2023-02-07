// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCHnH0rYvlVxGRD3rCBvG_RR8j6TfAOYXA",
  authDomain: "nike-store-20110.firebaseapp.com",
  projectId: "nike-store-20110",
  storageBucket: "nike-store-20110.appspot.com",
  messagingSenderId: "716279727685",
  appId: "1:716279727685:web:f4fc06dd9f0707bbf0c52c",
  measurementId: "G-2V57FKHZD5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
export default app;