import { createReducer } from '@reduxjs/toolkit';
import {
    LOGIN_SUCCESS,
    LOGIN_FAIL
} from '../actions/types';

export default authReducer = createReducer(
    initialState = { 
        user: {}
    }, {
    [LOGIN_SUCCESS]: (state, action) => {

        console.log(action.payload)
        return { 
            user: action.payload
        };
    },
    [LOGIN_FAIL]: state => {
        return { 
            user: {}
        };
    }
});