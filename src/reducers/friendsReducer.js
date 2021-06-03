import { createReducer } from '@reduxjs/toolkit';
import {
    RETRIEVE_FRIENDS_LIST,
    RETRIEVE_FRIEND_KEYS
} from '../actions/types';

export default friendsReducer = createReducer(
    initialState = { 
        currentFriends: [],
        pendingFriends: [],
        blocked: [],
        keys: []
    }, {
    [RETRIEVE_FRIENDS_LIST]: (state, action) => {
        return { 
            ...state,
            currentFriends: action.payload.currentFriends,
            pendingFriends: action.payload.pendingFriends,
            blocked: action.payload.blocked
        };
    },
    [RETRIEVE_FRIEND_KEYS]: (state, action) => {
        return { 
            ...state,
            keys: action.payload
        };
    }}
);