import React from 'react';
import { useSelector } from "react-redux";
import FilterDropdown from "./FilterDropDown";

function InputField() {
    let audience = useSelector(state => state && state.audience);
    let category = useSelector(state => state && state.category);

    return <div className='input-field-container'>
        <label htmlFor="search">SEARCH </label>
        <input id='search' className='input-fields' placeholder="Enter Search Terms" />
        <label htmlFor="dateRange"> DATE RANGE </label>
        <input id='dateRange' type="date"/>
        <label htmlFor="audience"> AUDIENCE </label>
        <FilterDropdown filteredField={"audience"} options={audience} placeholder={"(any)"} />
        <label htmlFor="category"> CATEGORY </label>
        <FilterDropdown filteredField={"category"} options={category} placeholder={"(any)"} />
        <hr/>
    </div>
}

export default InputField;