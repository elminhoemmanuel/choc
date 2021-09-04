import { START_FETCH, STOP_FETCH, SET_ERROR, SET_TWEETS } from "../types";


const initialState = {
  loading: false,
  tweets: [],
  error:'',
  
};

export const tweetsReducer = (state = initialState, action) => {
  switch (action.type) {

    case SET_TWEETS:
      return {
        ...state,
        tweets: action.payload
      };
    case START_FETCH:
      return {
        ...state,
        loading: true
      };
    case STOP_FETCH:
      return {
        ...state,
        loading: false
      };

    case SET_ERROR:
      return {
        ...state,
        error: "Something went wrong please refresh page to try again!"
      };

    default:
      return state;
  }
};