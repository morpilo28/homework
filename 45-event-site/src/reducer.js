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
    categories: getCategoriesFromEvents(events);

}

function getCategoriesFromEvents(events) {
    let categories = [];
    events.forEach(event => {
        if (!categories.includes(event.categories)) {
            categories.push(even.categories);
        }
    })
    categories.sort();
    return categories;
}

/*
const initialState = {
  trips: trips,
  cities: getCitiesFromTrips(trips),
  filters: {
    fromCity: null,
    toCity: null,
    departureDate: null,
    returnDate: null
  },
  sortBy: "departure",
  sortDirection: 1,
  pickableDays: getPickableDaysStartingFrom(startingDayString, trips)
*/