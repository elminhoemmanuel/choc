import { START_FETCH, STOP_FETCH , SET_ERROR, SET_TWEETS } from "../types";
import axios from 'axios'

//action to get tweets
export const getTweets = () => (dispatch) => {

    dispatch({ type: START_FETCH })

    axios.get(`https://jsonplaceholder.typicode.com/comments`)
        .then((response) => {
            // console.log(response);
            dispatch({ type: SET_TWEETS, payload:response.data })
            dispatch({ type: STOP_FETCH })
        }, (error) => {
            // console.log(error);
            dispatch({ type: SET_ERROR })
            dispatch({ type: STOP_FETCH })
        });

}






