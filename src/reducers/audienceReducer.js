import { createReducer } from '@reduxjs/toolkit';
import { 
    GENERATE_FRIEND_KEYS,
    GENERATE_SQUAD_KEYS,
    CLEAR_CUSTOM_LIST,
    REMOVE_MEMBER,
    ADD_MEMBER
} from '../actions/types';

export default audienceReducer = createReducer(
    initialState = { 
        friendsKeys: [],
        squadKeys: [],
        customKeys: []
    }, {
    [GENERATE_FRIEND_KEYS]: (state, action) => {
        return { 
            ...state,
            friendKeys: action.payload
        };
    },
    [GENERATE_SQUAD_KEYS]: (state, action) => {
        return { 
            ...state,
            squadKeys: action.payload
        };
    },
    [ADD_MEMBER]: (state, action) => {
        return { 
            ...state,
            customKeys: [...state.customKeys, action.payload]
        };
    },
    [REMOVE_MEMBER]: (state, action) => {
        const newList = state.customKeys.filter(item => item !== action.payload);
        return { 
            ...state,
            customKeys: newList
        };
    },
    [CLEAR_CUSTOM_LIST]: (state) => {
        return { 
            ...state,
            customKeys: []
        };
    }}
);