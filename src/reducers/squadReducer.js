import { createReducer } from '@reduxjs/toolkit';
import {
    RETRIEVE_SQUADS
} from '../actions/types';

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