import { START_FETCH, STOP_FETCH, SET_ERROR, SET_TWEETS, SHOW_CREATE, CREATE_TWEET, RESET } from "../types";


const initialState = {
  loading: false,
  tweets: [],
  error:'',
  create:false,
  tweetResponse:{}
  
};

export const tweetsReducer = (state = initialState, action) => {
  switch (action.type) {

    case SET_TWEETS:
      return {
        ...state,
        tweets: action.payload
      };
    case RESET:
      return {
        ...state,
        tweetResponse: {},
        loading: false,
        error:''
      };
    case CREATE_TWEET:
      return {
        ...state,
        tweetResponse: action.payload
      };
    case SHOW_CREATE:
      return {
        ...state,
        create: action.payload
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