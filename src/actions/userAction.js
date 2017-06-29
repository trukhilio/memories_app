import {
    LOGIN_REQUEST,
    LOGIN_SUCCESS,
    LOGIN_FAIL
} from '../constants/user';

export function handleLogin(){
    return function(dispatch){
        dispatch({
            type: LOGIN_REQUEST
        });
        let response = 'connected';
        if (response === 'connected'){
            let username = 'homosapiens';
            dispatch({
                type: LOGIN_SUCCESS,
                payload: username
            })
        }  else {
            dispatch({
                type: LOGIN_FAIL,
                error: true,
                payload: new Error ('Authorization failed')
            })
        }
    }
}
