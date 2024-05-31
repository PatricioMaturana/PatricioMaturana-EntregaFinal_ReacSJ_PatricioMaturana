import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './css/estilos.css'
 
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBQKNJyLB2F9FA7kovEQuW8ZlW_rdMNaUY",
  authDomain: "my-app-ebcea.firebaseapp.com",
  projectId: "my-app-ebcea",
  storageBucket: "my-app-ebcea.appspot.com",
  messagingSenderId: "143769550261",
  appId: "1:143769550261:web:98ea738ccb9d4d32ededfc"
};

// Initialize Firebase
initializeApp(firebaseConfig);

ReactDOM.createRoot(document.getElementById('root')).render(<App />)