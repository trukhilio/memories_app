import {
    GET_PHOTOS_REQUEST,
    GET_PHOTOS_SUCCESS,
    GET_PHOTOS_FAIL
} from '../constants/page';

import {
    FILTER_PHOTOS_REQUEST,
    FILTER_PHOTOS_SUCCESS,
    FILTER_PHOTOS_FAIL
} from '../constants/filter';

const initialState = {
    photos: [],
    buttonArr: [],
    fetching: false,
    error: ''
};

export default function page(state=initialState, action){
    switch (action.type) {
        case GET_PHOTOS_REQUEST:
            return { ...state, fetching: true, error:'' };

        case GET_PHOTOS_SUCCESS:
            return { ...state, photos: action.payload, buttonArr: action.buttons, fetching: false, error:'' };

        case GET_PHOTOS_FAIL:
            return { ...state, error: action.payload.message, fetching: false };

        case FILTER_PHOTOS_REQUEST:
            return { ...state, fetching: false, error: ''};

        case FILTER_PHOTOS_SUCCESS:
            return { ...state, photos: action.payload, fetching: false, error:'' };

        case FILTER_PHOTOS_FAIL:
            return { ...state, error: action.payload.message, fetching: false };

        default:
            return state;
    }
}
