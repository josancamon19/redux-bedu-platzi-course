import axios from "axios";
import {GET_USER_PUBLICATIONS, LOADING, ERROR} from "../types/publicationTypes";

export const getPublications = (userId) => async (dispatch) => {
    dispatch({type: LOADING});
    try {
        const response = await axios.get(`http://jsonplaceholder.typicode.com/posts?userId=${userId}`);
        dispatch({type: GET_USER_PUBLICATIONS, payload: response.data})
    } catch (e) {
        console.log(e.message);
        dispatch({type: ERROR, payload: e.message})
    }
};
