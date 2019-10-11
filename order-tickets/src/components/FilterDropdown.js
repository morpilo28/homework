import React, { useState } from 'react';
import {useDispatch} from "react-redux";

function FilterDropdown(props) {

  // let filteredField = props.filteredField;
  // let options = props.options;

  let { filteredField, options} = props;

  let [selectedOption, setSelectedOption] = useState(null);
  let dispatch = useDispatch();

  function onChange(event) {
    let value = event.target.value;

    setSelectedOption(value);
    let action = {
      type: "SELECT_FILTER_CHANGE",
      filteredField,
      value
    };
    dispatch(action);
  }

  return <select id="from-selector" onChange={onChange} value={selectedOption}>
    {
      options.map(value => <option value={value}>{value}</option>)
    }
  </select>;
}

export default FilterDropdown;

