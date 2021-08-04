import { createReducer } from '@reduxjs/toolkit';
import {
    RETRIEVE_SQUADS
} from '../actions/types';


export default squadReducer = createReducer(
    initialState = {
        squadList: [
            {
                type: 'Hangout',
                members: []
            },
            {
                type: 'Drinks',
                members: []
            },
            {
                type: 'Food',
                members: []
            },
            {
                type: 'Fitness',
                members: []
            },
            {
                type: 'Entertainment',
                members: []
            },
            {
                type: 'Nightlife',
                members: []
            },
        ]
    }, {
    [RETRIEVE_SQUADS]: (state, action) => {
        return { 
            squadList: [
                {
                    type: 'Hangout',
                    members: action.payload.hangout
                },
                {
                    type: 'Drinks',
                    members: action.payload.drinks
                },
                {
                    type: 'Food',
                    members: action.payload.food
                },
                {
                    type: 'Fitness',
                    members: action.payload.fitness
                },
                {
                    type: 'Entertainment',
                    members: action.payload.entertainment
                },
                {
                    type: 'Nightlife',
                    members: action.payload.nightlife
                },
            ]
        };
    }}
);

/*
export default squadReducer = createReducer(
    initialState = { 
        hangout: [],
        drinks: [],
        food: [],
        fitness: [],
        entertainment: [],
        nightlife: [],
    }, {
    [RETRIEVE_SQUADS]: (state, action) => {
        return { 
            hangout: action.payload.hangout,
            drinks: action.payload.drinks,
            food: action.payload.food,
            fitness: action.payload.fitness,
            entertainment: action.payload.entertainment,
            nightlife: action.payload.nightlife,
        };
    }}
);
*/