

// Import the functions you need from the SDKs you need

import { initializeApp } from "https://www.gstatic.com/firebasejs/10.10.0/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.10.0/firebase-auth.js";
import { signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.10.0/firebase-auth.js";



// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration

// For Firebase JS SDK v7.20.0 and later, measurementId is optional


const firebaseConfig = {
  apiKey: "AIzaSyCM5FwOFbK3OPmXAGCjsHDzFBKW8kDMl-M",
  authDomain: "twitter-clone-9e225.firebaseapp.com",
  projectId: "twitter-clone-9e225",
  storageBucket: "twitter-clone-9e225.appspot.com",
  messagingSenderId: "403231860304",
  appId: "1:403231860304:web:58e8ecf7c04e9ef7e8d355",
  measurementId: "G-S25LC8FHLM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


const auth = getAuth(app)

const submit = document.getElementById("submit")
const loginButton = document.querySelector('#login-form button');

submit.addEventListener("click", function(event){
  event.preventDefault();
  signup();
})

loginButton.addEventListener('click', function(event) {
  event.preventDefault();
  login();
});

function login() {
  const email = document.getElementById('login-email').value;
  const password = document.getElementById('login-password').value;

  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      alert('Logged in successfully');
      // Redirect to another page after successful login
      window.location.href = 'main.html';
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      alert(errorMessage);
    });
}
  
function signup () {
  const email = document.getElementById("signup-email").value;
  const password = document.getElementById("signup-password").value;

  createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    const user = userCredential.user;
    alert("Creating Account...");
    window.location.href = "main.html";
  })
  .catch(function(error){
    const error_code = error.code;
    const error_message = error.message;

    alert(error_message);
  });
}
