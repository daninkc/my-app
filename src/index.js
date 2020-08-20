import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import $ from 'jquery';
import styles from '/Users/Daniela/Desktop/React JS/Projects/my-app/src/bootstrap/css/bootstrap.css';
import functioning from '/Users/Daniela/Desktop/React JS/Projects/my-app/src/bootstrap/js/bootstrap.js';


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
