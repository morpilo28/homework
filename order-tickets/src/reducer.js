import actionTypes from "./actionTypes";

const initialState = {
  trips: [],
  cities: [],
  filters: {
    fromCity: null,
    toCity: null,
    departureDate: null,
    returnDate: null
  }
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case actionTypes.FILTER_CHANGE:
      break;
    case actionTypes.TRIPS_LOADED:
      break;
    case actionTypes.SORT_CHANGE:
      break;
    default:
      return state;
  }
}

export default reducer;
