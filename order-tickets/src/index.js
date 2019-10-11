import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {createStore} from "redux";
import {Provider} from "react-redux";
import trips from "./trips";

const store = createStore((state) => {
  let newState = {};
  if (state.trips) {
    newState.trips = [...state.trips];
    newState.cities = [];
    newState.trips.forEach(trip => {
      if (!newState.cities.includes(trip.from)) {
        newState.cities.push(trip.from);
      }
      if (!newState.cities.includes(trip.to)) {
        newState.cities.push(trip.to);
      }
    });
    newState.cities.sort();
  }
  return newState;
}, {
  trips: trips
});

ReactDOM.render(
  <Provider store={store}>
    <App/>
  </Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
