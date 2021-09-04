import { START_FETCH, STOP_FETCH, SET_ALBUMS, SET_ERROR, SET_NAME, SET_ALBUM, SET_PHOTOS } from "../types";


const initialState = {
  loading: false,
  albums: [],
  error:'',
  artist:{},
  album:{},
  photos:[]
};

export const albumsReducer = (state = initialState, action) => {
  switch (action.type) {

    case SET_NAME:
      return {
        ...state,
        artist: action.payload,
      };

    case SET_ALBUM:
      return {
        ...state,
        album: action.payload,
      };

    case SET_PHOTOS:
      return {
        ...state,
        photos: action.payload,
      };

    case SET_ALBUMS:
      return {
        ...state,
        albums: action.payload,
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