import {
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    LOGOUT_SUCCESS,
    LOGOUT_FAIL
} from '../constants/user';

const initialState = {
    content: '',
    error: ''
};

function user(state = initialState, action){

    switch(action.type) {
        case LOGIN_SUCCESS:
            return { ...state, content: action.payload, error: ''};
        case LOGIN_FAIL:
            return { ...state, error: action.payload.message};
        case LOGOUT_SUCCESS:
            return { ...state, content: ''};
        case LOGOUT_FAIL:
            return { ...state, error: action.payload.message};
    }
    return state
}

export default user
