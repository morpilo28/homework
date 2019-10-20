import React from 'react'
import events from 'events'

const eventsList = events;
console.log(eventsList);

function EventBox() {
    return <div>
        <div>
            <span>OCT</span><br/>
            <span>02</span><br/>
            <span>2019</span>
        </div>
        <div className='single-event'>
          <h3 >Vimeo CEO Anjali Sud</h3>
            <span>SUN, 6:30 PM to 8:30 Pm</span><br/>
            <span>Linkedin</span>
        </div>
        <footer>
            <div>social media</div>
            <p>register</p>
        </footer>
    </div>
}

export default EventBox;