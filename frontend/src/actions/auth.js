import axios from 'axios';
import { setAlert } from './alert';

import {
    SIGNUP_SUCCESS,
    SIGNUP_FAIL,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    LOGOUT,
} from './types';

    export const login = (email, password) => async dispatch => {
        const config = {
            headers:{
                'Content-Type': 'application/json'
            }
        }

        // const body = JSON.stringify({email, password});
        try{
            console.log("hello");
            const res = await axios.post('http://localhost:8000/api/token/', {email,password}, config);
            dispatch({
                type: LOGIN_SUCCESS,
                payload: res.data
            });
            dispatch(setAlert('Login Success', 'success'));
        }catch(err){
            console.log('err: ', err);
            dispatch({
                type: LOGIN_FAIL
            });
            dispatch(setAlert('Login Fail', 'error'));
        }
    }

export const signup = (name, email, password, password2) => async dispatch => {
    const config = {
        headers:{
            'Content-Type': 'application/json'
        }
    }
    const body = JSON.stringify({name, email, password, password2});

    try{
        const res = await axios.post('http://localhost:8000/api/accounts/signup', body, config);
        console.log('res: ', res);
        dispatch({
            type: SIGNUP_SUCCESS,
            payload: res.data
        });
        dispatch(login(email, password));
    }catch(err){
        dispatch({
            type: SIGNUP_FAIL
        });
        dispatch(setAlert('Login Fail', 'error'));
    }
}

export const logout = () => dispatch => {
    dispatch(setAlert('Logout Success', 'success'));
    dispatch({type: LOGOUT})
}
