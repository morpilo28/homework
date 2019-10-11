import React from 'react';
import './App.css';
import TripsTable from "./components/TripsTable";
import {useSelector} from "react-redux";
import FilterSection from "./components/FilterSection";

function App() {
  let displayedTrips = useSelector(state => state && state.displayedTrips);
  return <div className={"app-container"}>
    <FilterSection/>
    <TripsTable trips={displayedTrips}/>
  </div>;
}

export default App;
