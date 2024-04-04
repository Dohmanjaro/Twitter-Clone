import { initializeApp } from "https://www.gstatic.com/firebasejs/10.10.0/firebase-app.js";
import { getAuth, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.10.0/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyCM5FwOFbK3OPmXAGCjsHDzFBKW8kDMl-M",
  authDomain: "twitter-clone-9e225.firebaseapp.com",
  projectId: "twitter-clone-9e225",
  storageBucket: "twitter-clone-9e225.appspot.com",
  messagingSenderId: "403231860304",
  appId: "1:403231860304:web:58e8ecf7c04e9ef7e8d355",
  measurementId: "G-S25LC8FHLM"
};

const app = initializeApp(firebaseConfig);


const auth = getAuth(app)


    onAuthStateChanged(auth, (user) => {
    if (user) {
        // User is signed in, you can access user's information here
        console.log(user.email);
    } else {
        // No user is signed in, redirect to login page
        window.location.href = 'index.html';
    }
    });