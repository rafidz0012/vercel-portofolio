// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDZ8cyqKH5L3TOpAAnqAepe2ZsM4fX1P8M",
  authDomain: "projectauth-f3de9.firebaseapp.com",
  projectId: "projectauth-f3de9",
  storageBucket: "projectauth-f3de9.appspot.com",
  messagingSenderId: "33743293370",
  appId: "1:33743293370:web:ec6fa88d4ba3ef7f522b83",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
