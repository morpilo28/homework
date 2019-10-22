import React from 'react';
import EventBox from './EventBox'
import { useSelector } from "react-redux";

function MainContent() {
    let events = useSelector(state => state && state.events);

return <div className='mainContent'>
        <h2>October</h2>
        {events.map(singleEvent=>{
             return <EventBox {...singleEvent}/>
        })}
    </div>
}

export default MainContent;


/*   return (
        <div className="booksElement">
            {books.map(singleBook => {
                return <Book {...singleBook} />
            })}
        </div>
    ) */