import React from 'react';
import {useSelector} from "react-redux";
import FilterDropdown from "./FilterDropdown";

function FilterSection(props) {
  let cities = useSelector(state => state && state.cities);

  return <div className={"filter-section"}>
    <FilterDropdown filteredField={"fromCity"} options={cities} placeholder={"From"} />
    <FilterDropdown filteredField={"toCity"} options={cities} placeholder={"To" }/>
  </div>;
}

export default FilterSection;
