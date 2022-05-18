import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

//firbase
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBthQ4xIR1Uf1XMIsb8aRQiZfP-teqnRIo",
  authDomain: "ecommerce-coderhouse-rea-9360a.firebaseapp.com",
  projectId: "ecommerce-coderhouse-rea-9360a",
  storageBucket: "ecommerce-coderhouse-rea-9360a.appspot.com",
  messagingSenderId: "678358033680",
  appId: "1:678358033680:web:b4b050d049971ebb62b195"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig); 

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
