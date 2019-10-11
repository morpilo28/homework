import actionTypes from "./actionTypes";
import trips from "./trips";

const initialState = {
  trips: trips,
  cities: getCitiesFromTrips(trips),
  filters: {
    fromCity: null,
    toCity: null,
    departureDate: null,
    returnDate: null
  },
  sortBy: "departure"
};

function getCitiesFromTrips(trips) {
  let cities = [];
  trips.forEach(trip => {
    if (!cities.includes(trip.from)) {
      cities.push(trip.from);
    }
    if (!cities.includes(trip.to)) {
      cities.push(trip.to);
    }
  });
  cities.sort();
  return cities;
}

function calculateDisplayedTrips(trips = [], filters, sortBy) {
  const resultTrips = trips.filter(trip => {
    if (filters.fromCity && trip.from !== filters.fromCity) {
      return false;
    }

    if (filters.toCity && trip.to !== filters.toCity) {
      return false;
    }
    return true;
  });
  return resultTrips;
}

function reducer(state = initialState, action) {

  let newState = {...state, filters: {...state.filters}};
  if (state.trips) {
    newState.trips = [...state.trips];
    newState.cities = getCitiesFromTrips(newState.trips);
  }

  switch (action.type) {
    case actionTypes.FILTER_CHANGE:
      newState.filters[action.filteredField] = action.value;
      break;
    case actionTypes.TRIPS_LOADED:
      break;
    case actionTypes.SORT_CHANGE:
      break;
    default:
      break;
  }

  newState.displayedTrips = calculateDisplayedTrips(newState.trips, newState.filters, newState.sortBy);

  return newState;
}

export default reducer;
