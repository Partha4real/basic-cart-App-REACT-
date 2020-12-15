import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import firebase from 'firebase/app';
import 'firebase/firestore';


const firebaseConfig = {
  apiKey: "AIzaSyBhSa6uzx4UFsItic1VBSWwObYZo5ZbYPY",
  authDomain: "cart-20993.firebaseapp.com",
  projectId: "cart-20993",
  storageBucket: "cart-20993.appspot.com",
  messagingSenderId: "258923410567",
  appId: "1:258923410567:web:564d54a5bcea28f8f17422"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
 
ReactDOM.render(
  // <React.StrictMode>
    <App />,
  // </React.StrictMode>
  document.getElementById('root')
);

