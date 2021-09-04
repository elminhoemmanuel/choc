import { START_FETCH, STOP_FETCH, SET_ARTISTS, SET_ERROR } from "../types";


const initialState = {
  loading: false,
  artists: [],
  error:''
};

export const listReducer = (state = initialState, action) => {
  switch (action.type) {

    case SET_ARTISTS:
      return {
        ...state,
        artists: action.payload,
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
        error: "Something went wrong please try again!"
      };

    default:
      return state;
  }
};