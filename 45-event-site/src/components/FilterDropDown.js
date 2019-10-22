import React, { useState } from 'react';
import { useDispatch } from "react-redux";
import actionTypes from "../actionTypes";

function FilterDropDown(props) {
    let { id, filteredField, options, placeholder } = props;
    let [selectedOption, setSelectedOption] = useState('');
    /* let dispatch = useDispatch(); */

    /* function onChange(event) {
        let value = event.target.value;

        setSelectedOption(value);
        let action = {
            type: actionTypes.FILTER_CHANGE,
            filteredField,
            value
        };
        dispatch(action);
    } */
    return <select id={id}
        className='input-fields'
        /* onChange={onChange} */
        value={selectedOption}>
        <option>{placeholder}</option>
        {
            options.map(value => <option key={value}>{value}</option>)
        }
    </select>;
}

export default FilterDropDown;