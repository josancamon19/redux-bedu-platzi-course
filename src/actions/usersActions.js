import axios from "axios";
import {GET_USERS, LOADING, ERROR, GET_USER_FROM_ID} from "../types/userTypes";

export const getUsers = () => async (dispatch) => {
    dispatch({type: LOADING});
    try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/users');
        dispatch({type: GET_USERS, payload: response.data})
    } catch (e) {
        console.log(e.message);
        dispatch({type: ERROR, payload: e.message})
    }
};


export const getUserFromId = (userId) => async (dispatch) => {
    dispatch({type: LOADING});
    try {
        const response = await axios.get(`https://jsonplaceholder.typicode.com/users/${userId}`);
        dispatch({type: GET_USER_FROM_ID, payload: response.data})
    } catch (e) {
        console.log(e.message);
        dispatch({type: ERROR, payload: e.message})
    }
};
