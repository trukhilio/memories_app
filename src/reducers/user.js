import {
    LOGIN_SUCCESS,
    LOGIN_FAIL
} from '../constants/user';

const initialState = {
    name: '',
    error: ''
};

function user(state = initialState, action){

    switch(action.type) {
        case LOGIN_SUCCESS:
            return { ...state, name: action.payload, error: ''};
        case LOGIN_FAIL:
            return { ...state, error: action.payload.message}
    }
    return state
}

export default user
