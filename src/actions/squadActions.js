import firestore from '@react-native-firebase/firestore';
import { 
    RETRIEVE_SQUADS  
} from './types';

export const retrieveSquads = () => async (dispatch) => {
    try {
        const squadsCollection = firestore().collection("squads").doc('iOEaqDpLSbelERq4rZdjVyWq8PV2');
        const querySnapshot = await squadsCollection.get();
        let data = querySnapshot._data;
        dispatch({
            type: RETRIEVE_SQUADS,
            payload: data
        })
    } catch (err) {
        console.log('unable to retrieve squads', error.message);
    }
};


export const retrieveSquadKeys = () => async (dispatch) => {
    try {
        const squadsCollection = firestore().collection("squads").doc('iOEaqDpLSbelERq4rZdjVyWq8PV2');
        const querySnapshot = await squadsCollection.get();
        const data = querySnapshot._data.nightlife.map(item => item.uid);
        dispatch({
            type: RETRIEVE_SQUAD_KEYS,
            payload: data
        })
    } catch (err) {
        console.log('unable to retrieve squad keys', error.message);
    }
};


/*
export const retrieveSquads = () => async (dispatch) => {
    try {
        const squadCollection = firestore().collection("squads").doc('iOEaqDpLSbelERq4rZdjVyWq8PV2');
        const querySnapshot = await squadCollection.get();
        let data = querySnapshot._data;
        dispatch({
            type: RETRIEVE_SQUADS,
            payload: {
                hangoutSquad: data.hangoutSquad,
                drinksSquad: data.drinksSquad,
                foodSquad: data.foodSquad,
                fitnessSquad: data.fitnessSquad,
                entertainmentSquad: data.entertainmentSquad,
                nightlifeSquad: data.nightlifeSquad,
            }
        })
    } catch (err) {
        console.log('unable to retrieve squad keys', error.message);
    }
};
*/