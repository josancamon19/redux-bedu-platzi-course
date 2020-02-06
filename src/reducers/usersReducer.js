import {ERROR, GET_USER_FROM_ID, GET_USERS, LOADING} from "../types/userTypes";

const INITIAL_STATE = {
    'users': [],
    'userDetails': {},
    'loading': false,
    'error': ''
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case GET_USERS:
            return {...state, 'users': action.payload, 'loading': false};
        case GET_USER_FROM_ID:
            return {...state, 'userDetails': action.payload, 'loading': false};
        case LOADING:
            return {...state, 'loading': true};
        case ERROR:
            return {...state, 'error': action.payload, 'loading': false};
        default:
            return state
    }
}
