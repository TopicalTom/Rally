import { createReducer } from '@reduxjs/toolkit';
import {
    START_RALLYING,
    STOP_RALLYING
} from '../actions/types';

export default rallyReducer = createReducer(initialState = { status: "Browsing", interest: null, accent: "", accentBorder: "", accentTint: "" }, {
    [START_RALLYING]: (state, action) => {
        return { 
            status: "Rallying",
            interest: action.payload.interest,
            accent: action.payload.accent,
            accentBorder: action.payload.accentBorder,
            accentTint: action.payload.accentTint
        };
    },
    [STOP_RALLYING]: state => {
        return { 
            status: "Browsing",
            interest: null,
            accent: "",
            accentBorder: "",
            accentTint: ""
        };
    }
});