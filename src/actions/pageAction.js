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

let photosArr =[];
let buttonArr = [];
let photos;

function sortPhotos (photosArr){
    let photosSorted = photosArr.sort((a,b) => new Date(b.created_time).getTime() - new Date(a.created_time).getTime());
    return photosSorted
}

function buttonYears(){
    let getAllYears = photosArr.map((item => new Date(item.created_time).getFullYear()));
    let result = Array.from(new Set(getAllYears)).concat('All photos');
    if (result.length>1){
        return result
    } else {
        return result = []
    }
}

export function getPhotos(dispatch) {
    return function (dispatch){
        dispatch({
            type: GET_PHOTOS_REQUEST
        });
        FB.getLoginStatus(function(response) {
            if (response.status === 'connected'){
                FB.api(
                    'me?fields=albums{photos{created_time,source}},photos{created_time,source,tags}',
                    function (response) {
                        if (response && !response.error) {
                            let albums = response.albums.data.map((item) =>
                                item.photos.data);
                            let albumUnidade = albums.map((item) => item.map((item) => photosArr.push(item)));
                            let taggedPhotos = response.photos.data.map((item) => photosArr.push(item));
                            photos = sortPhotos(photosArr);
                            buttonArr = buttonYears();
                            dispatch({
                                type: GET_PHOTOS_SUCCESS,
                                payload: photos,
                                buttons: buttonArr
                            });
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
                    payload: new Error ('Check your facebook connection')
                })
            }
        });
    }
}

export function filterPhotos(year, dispatch) {
    return function(dispatch){
        dispatch({
            type: FILTER_PHOTOS_REQUEST
        });
        if (year){
            if (typeof year === 'string'){
                photos = photosArr;
                dispatch({
                    type: FILTER_PHOTOS_SUCCESS,
                    payload: photos
                });
            }
            else {
                let filterOne = (photo) => new Date(photo.created_time).getFullYear() === year;
                photos = photosArr.filter(filterOne);
                dispatch({
                    type: FILTER_PHOTOS_SUCCESS,
                    payload: photos
                });

            }
        } else {
            dispatch({
                type: FILTER_PHOTOS_FAIL,
                error: true,
                payload: new Error ('Does not filtered')
            })
        }
    }
}
