import events from './events';

/* 
   "date": "02 OCT 2019",
        "title": "HBSCNY Senior Event for All: Hudson River Park",
        "daytime": "WED, 1:00 PM TO 3:30 PM",
        "location": null,
        "categories": "SENIORS",
        "audience": "GENERAL PUBLIC"
*/

const initialState = {
  events: events,
  audience: getAudienceFromEvents(events),
  category: getCategoryFromEvents(events),
  filters: {
    dateRange: null,
  }
}

function getCategoryFromEvents(events) {
  let categoriesArray = [];
  events.forEach(event => {
    if (!categoriesArray.includes(event.categories)) {
      categoriesArray.push(event.categories);
    }
  })
  categoriesArray.sort();
  return categoriesArray;
}

function getAudienceFromEvents(events) {
  let audienceArray = [];
  events.forEach(event => {
    if (!audienceArray.includes(event.audience)) {
      audienceArray.push(event.audience);
    }
  })
  audienceArray.sort();
  return audienceArray;
}

function reducer(state = initialState, action) {

  let newState = { ...state, filters: { ...state.filters } };
  if (state.events) {
    newState.events = [...state.events];
    newState.audience = getAudienceFromEvents(newState.events);
    newState.category= getCategoryFromEvents(newState.events);
  }
  
  return newState;
}

export default reducer;
