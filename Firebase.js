// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAF3F28wv7BThPqlYlMbv2d3WUdnVDDy60",
  authDomain: "fine-fair-88950.firebaseapp.com",
  projectId: "fine-fair-88950",
  storageBucket: "fine-fair-88950.appspot.com",
  messagingSenderId: "405450076913",
  appId: "1:405450076913:web:b2bc8f820ccdcc7616ef50",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
