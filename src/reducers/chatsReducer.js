import { createReducer } from '@reduxjs/toolkit';
import { 
    RETRIEVE_CHATS,
    RETRIEVE_CHAT 
} from '../actions/types';

export default chatsReducer = createReducer(
    initialState = { 
        allChats: [],
        messages: []
    }, {
    [RETRIEVE_CHATS]: (state, action) => {
        return { 
            ...state,
            allChats: action.payload
        };
    },
    [RETRIEVE_CHAT]: (state, action) => {
        return { 
            ...state,
            messages: action.payload
        };
    }}
);