// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC0efpwYzjvyLogzxrGtgiiMFtWT1f7sCo",
  authDomain: "netflixgpt-b0149.firebaseapp.com",
  projectId: "netflixgpt-b0149",
  storageBucket: "netflixgpt-b0149.appspot.com",
  messagingSenderId: "451454480351",
  appId: "1:451454480351:web:ddaf17cbf57d11dd2c5e6a",
  measurementId: "G-NWKMYZCEKT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
