import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyA6PIhj6kJFnFIb4IW66le0239tj1WK610",
  authDomain: "dvd-store-a018c.firebaseapp.com",
  projectId: "dvd-store-a018c",
  storageBucket: "dvd-store-a018c.appspot.com",
  messagingSenderId: "633959888676",
  appId: "1:633959888676:web:67410ed8943a05c1cda5b1"
};

const app = initializeApp(firebaseConfig);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
