// firebaseConfig.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.6.0/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/11.6.0/firebase-firestore.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/11.6.0/firebase-auth.js";

// Substitua pelos dados do seu projeto Firebase
const firebaseConfig = {
  apiKey: "AIzaSyCF8gub82ktaroGq548IPJIsOanWIe5pZo",
  authDomain: "projeto-teste-c6e55.firebaseapp.com",
  projectId: "projeto-teste-c6e55",
  storageBucket: "projeto-teste-c6e55.firebasestorage.app",
  messagingSenderId: "593892306817",
  appId: "1:593892306817:web:3c4c95b21ac0f9e2374280",
  measurementId: "G-DWRLRV4NHL"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export { db, app, auth };
