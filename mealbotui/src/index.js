import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import './../node_modules/bootstrap/dist/css/bootstrap.css'
import './../node_modules/font-awesome/css/font-awesome.css'

import * as firebase from "firebase";

var config = {
  apiKey: "AIzaSyD9dDsgueDpArdmLi9Ta1BMdNXJflp8ous",
  authDomain: "mealbot-a6e2a.firebaseapp.com",
  databaseURL: "https://mealbot-a6e2a.firebaseio.com",
  storageBucket: "mealbot-a6e2a.appspot.com",
  messagingSenderId: "656258975826"
};
firebase.initializeApp(config);

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
