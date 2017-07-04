import {
    GET_PHOTOS_REQUEST,
    GET_PHOTOS_SUCCESS,
    GET_PHOTOS_FAIL
} from '../constants/page'

let photosArr =[];

export function getPhotos(dispatch) {
    return function (dispatch){
        dispatch({
            type: GET_PHOTOS_REQUEST
        });
        FB.getLoginStatus(function(response) {
            if (response.status === 'connected'){
                FB.api(
                    'me?fields=albums{photos{source}}',
                    function (response) {
                        if (response && !response.error) {
                            let albums = response.albums.data.map((item) =>
                                item.photos.data);
                            let albumUnidade = albums.map((item) => item.map((item) => photosArr.push(item)));
                            dispatch({
                                type: GET_PHOTOS_SUCCESS,
                                payload: photosArr
                            })
                        } else {
                            dispatch({
                                type: GET_PHOTOS_FAIL,
                                error: true,
                                payload: new Error ('Cannot get photos')
                            })
                        }
                    }
                );
            } else {
                dispatch({
                    type: GET_PHOTOS_FAIL,
                    error: true,
                    payload: new Error ('Cannot get photos')
                })
            }
        });
    }
}


