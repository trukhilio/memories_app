import {
    LOGIN_REQUEST,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    LOGOUT_REQUEST,
    LOGOUT_SUCCESS,
    LOGOUT_FAIL
} from '../constants/user';

let username;
let avatar;

export function handleLogin(){
    return function(dispatch){
        dispatch({
            type: LOGIN_REQUEST
        });
        FB.login(function(response) {
            if (response.authResponse) {

                FB.api('/me?fields=name,picture', function(response) {
                    console.log(response);
                    username = response.name;
                    avatar = response.picture.data.url;
                    dispatch({
                                type: LOGIN_SUCCESS,
                                payload: {username, avatar}
                            })
                });
            } else {
                dispatch({
                            type: LOGIN_FAIL,
                            error: true,
                            payload: new Error ('Authorization failed')
                        })
            }
        });

    }
};

export function handleLogout (){
    return function (dispatch){
        dispatch({
            type: LOGOUT_REQUEST
        });
        FB.getLoginStatus(function(response) {
            if (response.status !== 'unknown'){
                FB.logout(function(response) {
                });
                username = '';
                avatar = '';
                dispatch({
                    type: LOGOUT_SUCCESS,
                    payload: {username, avatar}
                })
            } else {
                dispatch({
                    type: LOGOUT_FAIL,
                    error: true,
                    payload: new Error('Something is wrong, maybe you are out from app earlier')
                })
            }
        });

    }
}
