import React from "react"
import ReactDOM from "react-dom"
import { BrowserRouter as Router } from "react-router-dom"
import { Provider } from 'react-redux'
import { store } from 'reducers'
import App from './App'
import AlertTemplate from 'react-alert-template-basic'
import * as firebase from 'firebase'

var config = {
  apiKey: "AIzaSyBt-m9d1xI2UaXdO3rnSnYtTygaduvOTwE",
  authDomain: "test-96162.firebaseapp.com",
  databaseURL: "https://test-96162.firebaseio.com",
  projectId: "test-96162",
  storageBucket: "test-96162.appspot.com",
  messagingSenderId: "816146587586"
};
firebase.initializeApp(config);

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>,
  document.getElementById("root")
)
