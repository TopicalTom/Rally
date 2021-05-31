import { createReducer } from '@reduxjs/toolkit';
import {
    START_RALLYING,
    STOP_RALLYING
} from '../actions/types';

export default rallyReducer = createReducer(
    initialState = { 
        status: "Browsing", 
        interest: null, 
        accent: "rgba(46,46,46,1)", 
        accentBorder: "rgba(46,46,46,.5)", 
        accentTint: "rgba(46,46,46,.1)" 
    }, {
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
            accent: "rgba(46,46,46,1)",
            accentBorder: "rgba(46,46,46,.5)",
            accentTint: "rgba(46,46,46,.1)"
        };
    }}
);