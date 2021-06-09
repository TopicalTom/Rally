import { createReducer } from '@reduxjs/toolkit';
import { 
    GENERATE_AUDIENCE_KEYS,
    CREATE_AUDIENCE,
    CLEAR_AUDIENCE
} from '../actions/types';

export default audienceReducer = createReducer(
    initialState = { 
        generalKeys: [],
        customKeys: []
    }, {
    [GENERATE_AUDIENCE_KEYS]: (state, action) => {
        return { 
            ...state,
            generalKeys: action.payload
        };
    },
    [CREATE_AUDIENCE]: (state, action) => {
        return { 
            ...state,
            customKeys: action.payload
        };
    },
    [CLEAR_AUDIENCE]: (state) => {
        return { 
            ...state,
            customKeys: []
        };
    }}
);