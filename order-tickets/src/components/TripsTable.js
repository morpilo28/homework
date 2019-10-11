import React from 'react';

function getTripRow(trip) {
  return <div className="table-row trip-row">
    <div className={"table-cell"}>
      <span className={"main-header"}>{trip.departure}</span>
      <br/>
      <span className={"sup-header"}>{trip.from}</span>
    </div>
    <div className={"table-cell"}>{trip.duration}</div>
    <div className={"table-cell"}>
      <span className={"main-header"}>{trip.arrival}</span>
      <br/>
      <span className={"sup-header"}>{trip.to}</span>
    </div>
    <div className={"table-cell"}>{trip.operator}</div>
    <div className={"table-cell"}>{trip.busId}</div>
    <div className={"table-cell"}>{trip.price}</div>
    <div className={"table-cell"}><a href="">Order Now</a></div>
  </div>
}

function TripsTable(props) {
  return <div className={"table"}>
    <div className="table-row trips-table-header">
      <div className={"table-cell"}>Departure</div>
      <div className={"table-cell"}>Duration</div>
      <div className={"table-cell"}>Arrival</div>
      <div className={"table-cell"}>
        <span className={"main-header"}>Operator</span>
        <br/>
        <span className={"sup-header"}>Rating</span>
      </div>
      <div className={"table-cell"}>
        <span className={"main-header"}>Bus ID</span>
        <br/>
        <span className={"sup-header"}>Features</span>
      </div>
      <div className={"table-cell"}>
        <span className={"main-header"}>Price</span>
        <br/>
        <span className={"sup-header"}>per person</span>
      </div>
      <div className={"table-cell"}/>
    </div>
    {props.trips.map(getTripRow)}
  </div>
}

export default TripsTable;


