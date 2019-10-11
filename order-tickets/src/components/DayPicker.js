import React, { useState } from 'react';
import {useDispatch, useSelector} from "react-redux";
import actionTypes from "../actionTypes";



function DayPicker(props) {
  let dispatch = useDispatch();

  function moveDays(byDays) {
    dispatch({
      type: actionTypes.MOVE_DAY_PICKER,
      byDays
    });
  }

  let days = useSelector(state => state.pickableDays);

  return <div className={"table"}>
    <div className={"table-row"}>
      <div className={"table-cell"} onClick={() => moveDays(-7)}>Previous 7 days</div>
      {
        days.map(day => {
          return <div className={"table-cell"}>
            <span>{day.displayText}</span>
            <br/>
            <span>${day.lowestPrice}+</span>
          </div>
        })
      }
      <div className={"table-cell"} onClick={() => moveDays(7)}>Next 7 days</div>
    </div>
  </div>;
}

export default DayPicker;
