import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import * as bootstrap from 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyAhm4olEaktOY8yoroL03l7H94LwkjzcwM",
  authDomain: "coder-project-c84c3.firebaseapp.com",
  projectId: "coder-project-c84c3",
  storageBucket: "coder-project-c84c3.appspot.com",
  messagingSenderId: "774183930354",
  appId: "1:774183930354:web:e040df981a392cd537036b"
};

const app = initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <App />
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
