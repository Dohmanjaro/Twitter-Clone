// Import the functions you need from the SDKs you need

import { initializeApp } from "https://www.gstatic.com/firebasejs/10.10.0/firebase-app.js";

import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.10.0/firebase-analytics.js";

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
const firebase = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);


const auth = firebase.auth()
const database = firebase.database()



  
function signup () {
  email = document.getElementById('signup-email')
  password = document.getElementById('signup-password')

  if(validate_email(email) == false || validate_password(password) == false){
    alert('Email or password is outta line')
  return
  }
  


  auth.createUserWithEmailAndPassword(email, password)
  .then(function(){
    var user = auth.currentUser

    var database_ref = database.ref()

    var user_data ={
      email : email,
      last_login : Date.now()
    }

    database_ref.child('users/' + user.uid).set(user_data)
  })

  .catch(function(error){
    var error_code = error.code
    var error_message = error.message

    alert(error_message)
  })
}

function validate_email(email){
  expression = /^[^@]+@\w+(\.\w+)+\w$/;
  if(expression.test(email)== true){
    return true;
  }
  else{
    return false;
  }
}

function validate_password(password){
  if(password < 6){
    return false;
  }
  else{
    return true;
  }
}

function validate_field(field){
  if(field ==null){
    return false;
  }
  if(field.length <=0){
    return false;
  }
  else{
    return true;
  }
}

























  
//   signupForm.addEventListener('submit', (event) => {
//     event.preventDefault();
  
//     const email = document.getElementById('signup-email').value;
//     const password = document.getElementById('signup-password').value;
  
//     if (email === '' || password === '') {
//       alert('Please enter your email and password.');
//       return; // Prevent form submission
//     } else if (password.length < 6) {
//       alert('Password must be at least 6 characters long.');
//       return;
//     }
  
//     firebase.auth().createUserWithEmailAndPassword(email, password)
//       .then((userCredential) => {
//         // User successfully created
//         console.log('User signed up:', userCredential.user);
//         // Redirect to a logged-in view or display a success message
//       })
//       .catch((error) => {
//         const errorCode = error.code;
//         const errorMessage = error.message;
  
//         // Handle signup errors based on errorCode
//         switch (errorCode) {
//           case 'auth/weak-password':
//             console.error('Signup error:', errorMessage);
//             alert('Password is too weak. Please choose a stronger password.');
//             break;
//           case 'auth/email-already-in-use':
//             console.error('Signup error:', errorMessage);
//             alert('Email already in use. Please try a different email address.');
//             break;
//           case 'auth/invalid-email':
//             console.error('Signup error:', errorMessage);
//             alert('Invalid email format. Please enter a valid email address.');
//             break;
//           // Add more cases for other relevant error codes
//           default:
//             console.error('Signup error:', errorMessage);
//             alert('An error occurred during signup. Please try again.');
//         }
//       });
//   });
  

// const loginForm = document.getElementById('login-form');

// loginForm.addEventListener('submit', (event) => {
//   event.preventDefault();

//   const email = document.getElementById('login-email').value;
//   const password = documentgetElementById('login-password').value;

//   firebase.auth().signInWithEmailAndPassword(email, password)
//   .then((userCredential) => {
//     // User successfully logged in
//   })
//   .catch((error) => {
//     const errorCode = error.code;
//     const errorMessage = error.message;

//     // Handle login errors based on errorCode
//     switch (errorCode) {
//       case 'auth/wrong-password':
//         console.error('Login error:', errorMessage);
//         // Display error message to user: "Incorrect password"
//         break;
//       case 'auth/user-not-found':
//         console.error('Login error:', errorMessage);
//         // Display error message to user: "Email not found. Please create an account."
//         break;
//       case 'auth/invalid-email':
//         console.error('Login error:', errorMessage);
//         // Display error message to user: "Invalid email format"
//         break;
//       // Add more cases for other relevant error codes
//       default:
//         console.error('Login error:', errorMessage);
//         // Handle generic error
//     }
//   });
// });


