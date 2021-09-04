import { START_FETCH, STOP_FETCH , SET_ALBUMS, SET_ERROR, SET_NAME } from "../types";
import axios from 'axios'

//action to set artist name
export const setArtist = (artist) => (dispatch) => {

    dispatch({ type: SET_NAME, payload:artist })

}

//action to get artist albums
export const getAlbums = () => (dispatch) => {

    dispatch({ type: START_FETCH })

    axios.get(`https://jsonplaceholder.typicode.com/albums`)
        .then((response) => {
            // console.log(response);
            dispatch({ type: SET_ALBUMS, payload:response.data })
            dispatch({ type: STOP_FETCH })
        }, (error) => {
            // console.log(error);
            dispatch({ type: SET_ERROR })
            dispatch({ type: STOP_FETCH })
        });

}





