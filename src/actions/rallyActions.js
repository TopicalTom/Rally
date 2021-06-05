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
                type: data.type
            }
        })
    } catch (err) {
        console.error(err)
    }
};

export const startRallying = (interest, prompt, type) => async (dispatch) => {
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
            discoverable: ["Yx6JoIWFBoGY82GoDwVm", 'iOEaqDpLSbelERq4rZdjVyWq8PV2']
        });
        dispatch({
            type: START_RALLYING,
            payload: {
                rally: interest,
                prompt: prompt,
                type: type
            }
        })
    } catch (error) {
        console.log('error broadcasting ', error.message)
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
            discoverable: ["Yx6JoIWFBoGY82GoDwVm", 'iOEaqDpLSbelERq4rZdjVyWq8PV2']
        });
        dispatch({ type: STOP_RALLYING })
    } catch (error) {
        console.log('error broadcasting ', error.message)
    }
};

/*
export const broadcastRally = async (profile, displayName, interest) => {
    const socialRef = firestore().collection('social').doc('iOEaqDpLSbelERq4rZdjVyWq8PV2');
    try {
        await socialRef.set({
            name: displayName,
            profile,
            status: "Rallying",
            rally: interest, 
            prompt: "I'm interested in all of this...",
            coord: {
                lat: -47,
                long: 23
            },
            discoverable: ["Yx6JoIWFBoGY82GoDwVm"]
        });
    } catch (error) {
        console.log('error broadcasting ', error.message)
    }
};

export const endRally = async (profile, displayName) => {
    const socialRef = firestore().collection('social').doc('iOEaqDpLSbelERq4rZdjVyWq8PV2');
    try {
        await socialRef.set({
            name: displayName,
            profile,
            status: "Browsing",
            rally: "None", 
            prompt: "",
            coords: {
                lat: -47,
                long: 23
            },
            discoverable: ["Yx6JoIWFBoGY82GoDwVm"]
        });
    } catch (error) {
        console.log('error broadcasting ', error.message)
    }
};

export const startRallying = (interest) => dispatch => {
    dispatch({
        type: START_RALLYING,
        payload: interest
    })
};

export const stopRallying = () => dispatch => {
    dispatch({ type: STOP_RALLYING })
};
*/