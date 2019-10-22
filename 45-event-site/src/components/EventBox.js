import React from 'react'

function EventBox(props) {
    let { audience, categories, date, daytime, location, title } = props;

    return <div className="singleEvent">
        <div>
            <span>{date}</span><br />
        </div>
        <div className='single-event'>
            <h3 >{title}</h3>
            <div>{daytime}</div>
            <div>{location}</div>
            <span>{audience + " "}</span>
            <span>{categories}</span>
        </div>
        <footer>
            <span>social media </span>
            <span>Register</span>
        </footer>
    </div>
}

export default EventBox;

/*
{
        "date": "02 OCT 2019",
        "title": "HBSCNY Senior Event for All: Hudson River Park",
        "daytime": "WED, 1:00 PM TO 3:30 PM",
        "location": null,
        "categories": "SENIORS",
        "audience": "GENERAL PUBLIC"
*/