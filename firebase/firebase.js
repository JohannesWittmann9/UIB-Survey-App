// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import firebase,{ getFirestore } from 'firebase/firestore'
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.APIKEY,
  authDomain: process.env.AUTHDOMAIN,
  projectId: process.env.PROJECTID,
  storageBucket: process.env.STORAGEBUCKET,
  messagingSenderId: process.env.SENDER,
  appId: process.env.APPID,
  measurementId: process.env.MEASUREMENT
};


// Initialize Firebase

const app = initializeApp(firebaseConfig);
console.log("Firebase-App is initialized ...");
const db = getFirestore(app);
const storage = getStorage(app);

export { db , storage};

