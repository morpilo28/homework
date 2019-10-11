import React, { useState } from 'react';
import {useDispatch, useSelector} from "react-redux";

function FilterSection(props) {
  let cities = useSelector(state => state && state.cities);
  let [selectedCity, setSelectedCity] = useState(null);
  let dispatch = useDispatch();

  function onFromChange(event) {
    let city = event.target.value;

    setSelectedCity(city);
    let action = {
      type: "SELECTED_FROM_CITY_CHANGE",
      city
    };
    dispatch(action);
  }

  return <div className={"filter-section"}>
    <select id="from-selector" onChange={onFromChange} value={selectedCity}>
      {
        cities.map(city => <option value={city}>{city}</option>)
      }
    </select>
  </div>;
}

export default FilterSection;
