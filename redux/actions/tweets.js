import { START_FETCH, STOP_FETCH , SET_ERROR, SET_TWEETS, SHOW_CREATE, CREATE_TWEET, RESET } from "../types";
import axios from 'axios'

//action to set artist name
export const showCreate = (value) => (dispatch) => {
    dispatch({ type: SHOW_CREATE, payload:value })
}

//action to reset fields
export const reset = () => (dispatch) => {
    dispatch({ type: RESET })
}

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

//action to get tweets
export const createTweet = (data) => (dispatch) => {

    dispatch({ type: START_FETCH })

    axios.post(`https://jsonplaceholder.typicode.com/comment`,data, {
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        }
    })
        .then((response) => {
            // console.log(response);
            dispatch({ type: CREATE_TWEET, payload:response.data })
            dispatch({ type: STOP_FETCH })
        }, (error) => {
            // console.log(error);
            dispatch({ type: SET_ERROR })
            dispatch({ type: STOP_FETCH })
        });

}






