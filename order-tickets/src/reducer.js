import actionTypes from "./actionTypes";
import trips from "./trips";
import {getDayString, datePlusDays, parseTime} from "./dateUtils";

function getPickableDaysStartingFrom(day, trips) {
  let currentDay = day;
  let days = [];
  for (let i = 0; i < 7; i++) {
    let dayData = {
      day: new Date(currentDay),
      displayText: currentDay,
      lowestPrice: Math.min(...(trips.filter(trip => trip.day === currentDay).map(trip => trip.price)), )
    };
    if (dayData.lowestPrice === Infinity) {
      dayData.lowestPrice = 0;
    }
    days.push(dayData);
    currentDay = getDayString(datePlusDays(dayData.day, 1));
  }
  return days;
}

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
  pickableDays: getPickableDaysStartingFrom("Wed, Sept 25", trips)
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

function calculateDisplayedTrips(trips = [], filters, sortBy, sortDirection) {
  const resultTrips = trips.filter(trip => {
    if (filters.fromCity && trip.from !== filters.fromCity) {
      return false;
    }

    if (filters.toCity && trip.to !== filters.toCity) {
      return false;
    }

    if (filters.departureDate && trip.day !== filters.departureDate) {
      return false;
    }
    return true;
  });

  if (sortBy === "departure") {
    resultTrips.sort((trip1, trip2) => {
      return sortDirection * (parseTime(trip2.departure) - parseTime(trip1.departure));
    });
  }

  if (sortBy === "price") {
    resultTrips.sort((trip1, trip2) => {
      return sortDirection * (trip1.price - trip2.price);
    });
  }

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
      newState.sortBy = action.field;
      newState.sortDirection = state.sortBy === action.field ? state.sortDirection * (-1) : 1;
      break;
    case actionTypes.MOVE_DAY_PICKER:
      let currentDay = state.pickableDays[0].day;
      let newStartingDay = getDayString(datePlusDays(currentDay, action.byDays));
      newState.pickableDays = getPickableDaysStartingFrom(newStartingDay, newState.trips);
      break;
    default:
      break;
  }

  newState.displayedTrips = calculateDisplayedTrips(newState.trips, newState.filters, newState.sortBy, newState.sortDirection);

  return newState;
}

export default reducer;
