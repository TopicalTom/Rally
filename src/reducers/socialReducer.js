import { createReducer } from '@reduxjs/toolkit';
import { RETRIEVE_SOCIAL_CIRCLE } from '../actions/types';

export default socialReducer = createReducer(
    initialState = {
        socialCircle: []
    }, {
    [RETRIEVE_SOCIAL_CIRCLE]: (state, action) => {
        return {
            socialCircle: action.payload
        }
    }}
);