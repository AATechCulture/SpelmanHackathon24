// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore, collection, getDocs } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC_-JRUMEfBvAsBZkiOfumyhmSW4gU7ETI",
  authDomain: "protege-7435a.firebaseapp.com",
  projectId: "protege-7435a",
  storageBucket: "protege-7435a.firebasestorage.app",
  messagingSenderId: "40367875196",
  appId: "1:40367875196:web:97e7426e2f3e23964c55f9",
  measurementId: "G-W2C7QLBP1K"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);
export {db};
