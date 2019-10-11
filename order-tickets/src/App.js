import React from 'react';
import './App.css';
import TripsTable from "./components/TripsTable";
import {useSelector} from "react-redux";
import FilterSection from "./components/FilterSection";

function App() {
  let trips = useSelector(state => state && state.trips);
  return <div className={"app-container"}>
    <FilterSection/>
    <TripsTable trips={trips}/>
  </div>;
}

export default App;
