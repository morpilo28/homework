import React, { useState } from 'react';
import {useSelector} from "react-redux";

function DayPicker(props) {
  let days = useSelector(state => state.pickableDays);

  return <div className={"table"}>
    <div className={"table-row"}>
      <div className={"table-cell"}>Previous 7 days</div>
      {
        days.map(day => {
          return <div className={"table-cell"}>
            <span>{day.displayText}</span>
            <br/>
            <span>${day.lowestPrice}+</span>
          </div>
        })
      }
      <div className={"table-cell"}>Next 7 days</div>
    </div>
  </div>;
}

export default DayPicker;
