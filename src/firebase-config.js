// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAJefhgE1nUAeMVTEB7ED5PMv60p5nS7_w",
  authDomain: "my-first-firebaseproj.firebaseapp.com",
  projectId: "my-first-firebaseproj",
  storageBucket: "my-first-firebaseproj.appspot.com",
  messagingSenderId: "597045831895",
  appId: "1:597045831895:web:55db3b26e14f193cd2a892",
  measurementId: "G-7CLR2JK0MY",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const db = getFirestore(app);
