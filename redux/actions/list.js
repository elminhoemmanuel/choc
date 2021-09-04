import { START_FETCH, STOP_FETCH , SET_ARTISTS, SET_ERROR } from "../types";
import axios from 'axios'

//action to fetch pictures for each tab
export const getArtists = () => (dispatch) => {

    dispatch({ type: START_FETCH })

    axios.get(`https://jsonplaceholder.typicode.com/users`)
        .then((response) => {
            // console.log(response);
            dispatch({ type: SET_ARTISTS, payload:response.data })
            dispatch({ type: STOP_FETCH })
        }, (error) => {
            // console.log(error);
            dispatch({ type: SET_ERROR })
            dispatch({ type: STOP_FETCH })
        });

}







