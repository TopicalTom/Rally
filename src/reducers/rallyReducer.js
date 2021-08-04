import { createReducer } from '@reduxjs/toolkit';
import {
    START_RALLYING,
    STOP_RALLYING
} from '../actions/types';

export default rallyReducer = createReducer(
    initialState = { 
        status: "Browsing", 
        interest: null, 
        prompt: null,
        type: 'All friends',
        keys: [],
        accent: '#131313',
        //accent: "rgba(46,46,46,1)", 
        accentBorder: "rgba(46,46,46,.5)", 
        accentTint: "rgba(46,46,46,.1)" 
    }, {
    [START_RALLYING]: (state, action) => {
        switch (action.payload.rally) {
            case 'Hangout': {
                return { 
                    status: "Rallying",
                    interest: action.payload.rally,
                    prompt: action.payload.prompt,
                    type: action.payload.type,
                    keys: [],
                    //accent: "rgba(253,45,85,1)",
                    accent: "rgba(236,57,75,1)",
                    accentBorder: "rgba(236,57,75,.5)",
                    accentTint: "rgba(236,57,75,.1)",
                };
            }
            case 'Drinks': {
                return { 
                    status: "Rallying",
                    interest: action.payload.rally,
                    prompt: action.payload.prompt,
                    type: action.payload.type,
                    keys: [],
                    //accent: "rgba(239,135,69,1)",
                    accent: "rgba(237,117,70,1)",
                    accentBorder: "rgba(239,135,69,.5)",
                    accentTint: "rgba(239,135,69,.1)",
                };
            }
            case 'Food': {
                return { 
                    status: "Rallying",
                    interest: action.payload.rally,
                    prompt: action.payload.prompt,
                    type: action.payload.type,
                    keys: [],
                    accent: "rgba(252,183,40, 1)",
                    accentBorder: "rgba(252,183,40, .5)",
                    accentTint: "rgba(252,183,40, .1)",
                };
            }
            case 'Fitness': {
                return { 
                    status: "Rallying",
                    interest: action.payload.rally,
                    prompt: action.payload.prompt,
                    type: action.payload.type,
                    keys: [],
                    //accent: "rgba(94, 203, 132, 1);",
                    accent: "rgba(59, 209, 111, 1);",
                    accentBorder: "rgba(94, 203, 132, .5)",
                    accentTint: "rgba(94, 203, 132, .1)",
                };
            }
            case 'Entertainment': {
                return { 
                    status: "Rallying",
                    interest: action.payload.rally,
                    prompt: action.payload.prompt,
                    type: action.payload.type,
                    keys: [],
                    //accent: "rgba(68,147,239,1)",
                    accent: "rgba(72,159,234,1)",
                    accentBorder: "rgba(68,147,239,.5)",
                    accentTint: "rgba(68,147,239,.1)",
                };
            }
            case 'Nightlife': {
                return { 
                    status: "Rallying",
                    interest: action.payload.rally,
                    prompt: action.payload.prompt,
                    type: action.payload.type,
                    keys: [],
                    accent: "rgba(139,111,246,1)",
                    accentBorder: "rgba(139,111,246,.5)",
                    accentTint: "rgba(139,111,246,.1)",
                };
            }
            default: 
                return state;
        }
    },
    [STOP_RALLYING]: () => {
        return { 
            status: "Browsing",
            interest: null,
            prompt: null,
            type: 'All friends',
            keys: [],
            accent: '#131313',
            accentBorder: "rgba(46,46,46,.5)",
            accentTint: "rgba(46,46,46,.1)"
        };
    }}
);

/*
                    accent: "rgba(68,173,255,1)",
                    accentBorder: "rgba(68,173,255,.5)",
                    accentTint: "rgba(68,173,255,.1)",
*/

/*
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

*/