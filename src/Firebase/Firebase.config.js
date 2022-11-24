// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBZf8gluBtc7x-r_02wu-i5vQZRFsj65wM",
    authDomain: "xtocky-cycle.firebaseapp.com",
    projectId: "xtocky-cycle",
    storageBucket: "xtocky-cycle.appspot.com",
    messagingSenderId: "277688916398",
    appId: "1:277688916398:web:86530742e7f8061ec0103f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app