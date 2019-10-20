import React from 'react';

function InputField() {
    return <div className='input-field-container'>
        <label>SEARCH  </label><label>DATE RANGE  </label><label>AUDIENCE  </label><label>CATEGORY</label><br />
        <input className='input-fields' placeholder="Enter Search Terms" />
        <select className='input-fields'>
            <option value="dateRange">(any)</option>
        </select>
        <select className='input-fields'>
            <option value="audience">(any)</option>
        </select>
        <select className='input-fields'>
            <option value="category">(any)</option>
        </select>
    </div>
}

export default InputField;