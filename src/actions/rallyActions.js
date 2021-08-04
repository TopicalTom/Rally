import firestore from '@react-native-firebase/firestore';
import { 
    START_RALLYING,
    STOP_RALLYING
} from './types';

export const retrieveCurrentRally = () => async (dispatch) => {
    try {
        const currentRallyRef = firestore().collection("social").doc('iOEaqDpLSbelERq4rZdjVyWq8PV2');
        const querySnapshot = await currentRallyRef.get();
        let data = querySnapshot._data;
        dispatch({
            type: START_RALLYING,
            payload: {
                rally: data.rally,
                prompt: data.prompt,
                type: data.type,
                discoverable: data.discoverable
            }
        })
    } catch (err) {
        console.error(err)
    }
};

export const startRallying = (interest, prompt, type, keys) => async (dispatch) => {
    try {
        const socialRef = firestore().collection('social').doc('iOEaqDpLSbelERq4rZdjVyWq8PV2');
        await socialRef.set({
            name: "Thomas",
            profile: "https://lh3.googleusercontent.com/a-/AOh14GhSdOYlIHj2HeYabqR2RSB15dkWmocjRLAusWJq=s96-c",
            status: "Rallying",
            rally: interest, 
            prompt: prompt,
            type: type,
            coord: {
                lat: -47,
                long: 23
            },
            discoverable: keys
        });
        dispatch({
            type: START_RALLYING,
            payload: {
                rally: interest,
                prompt: prompt,
                type: type, 
                discoverable: keys
            }
        })
    } catch (error) {
        console.log('Unable to Rally ', error.message)
    }
};

export const stopRallying = () => async (dispatch) => {
    try {
        const socialRef = firestore().collection('social').doc('iOEaqDpLSbelERq4rZdjVyWq8PV2');
        await socialRef.set({
            name: "Thomas",
            profile: "https://lh3.googleusercontent.com/a-/AOh14GhSdOYlIHj2HeYabqR2RSB15dkWmocjRLAusWJq=s96-c",
            status: "Browsing",
            rally: "None", 
            prompt: "",
            type: "All friends", 
            coord: {
                lat: -47,
                long: 23
            },
            discoverable: []
        });
        dispatch({ type: STOP_RALLYING })
    } catch (error) {
        console.log('Unable to end Rally ', error.message)
    }
};