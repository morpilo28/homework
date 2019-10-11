import React from 'react';
import './App.css';
import TripsTable from "./components/TripsTable";
import {useSelector} from "react-redux";

function App() {
  let trips = useSelector(state => state && state.trips);
  return trips ? <TripsTable trips={trips}/> : <span>Loading...</span>;
}

export default App;
