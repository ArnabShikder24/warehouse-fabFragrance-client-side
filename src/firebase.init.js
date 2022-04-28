// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA_m94dIpXEKswSrfSG_oevTTCxCWbCYFY",
  authDomain: "assignment-11-1c3e6.firebaseapp.com",
  projectId: "assignment-11-1c3e6",
  storageBucket: "assignment-11-1c3e6.appspot.com",
  messagingSenderId: "494694074450",
  appId: "1:494694074450:web:9c85ba7dad062a81c7378b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;

