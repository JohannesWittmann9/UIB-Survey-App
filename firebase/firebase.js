// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import firebase,{ getFirestore } from 'firebase/firestore'
import { getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC7v2yG2jySUuFKJSs5e5GXPPQ3qU8iZt4",
  authDomain: "surveyuib.firebaseapp.com",
  projectId: "surveyuib",
  storageBucket: "surveyuib.appspot.com",
  messagingSenderId: "415774266492",
  appId: "1:415774266492:web:0686d63b4e002f40e7a5f9",
  measurementId: "G-FR8445J652"
};


// Initialize Firebase

const app = initializeApp(firebaseConfig);
console.log("Firebase-App is initialized ...");
const db = getFirestore(app);
const storage = getStorage(app);

export { db , storage};

