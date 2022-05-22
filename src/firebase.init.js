// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAF2hLxyE5-7JqLv6D50bmRj6kMahMN3lY",
  authDomain: "fix-manufacturer.firebaseapp.com",
  projectId: "fix-manufacturer",
  storageBucket: "fix-manufacturer.appspot.com",
  messagingSenderId: "907077895981",
  appId: "1:907077895981:web:e9716a48c4354cf1bf35a4",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;
