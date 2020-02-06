import {ERROR, GET_USER_PUBLICATIONS, LOADING} from "../types/publicationTypes";

const INITIAL_STATE = {'publications': [], 'loading': false, 'error': ''};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case GET_USER_PUBLICATIONS:
            return {...state, 'publications': action.payload, 'loading': true};
        case LOADING:
            return {...state, 'loading': true};
        case ERROR:
            return {...state, 'error': action.payload, 'loading': false}
        default:
            return state
    }
}
