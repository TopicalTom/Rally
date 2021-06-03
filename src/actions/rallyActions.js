import firestore from '@react-native-firebase/firestore';
import { 
    START_RALLYING,
    STOP_RALLYING
} from './types';

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

export const startRallying = (interest, accent, accentBorder, accentTint) => dispatch => {
    dispatch({
        type: START_RALLYING,
        payload: {
            interest,
            accent,
            accentBorder,
            accentTint
        }
    })
};

export const stopRallying = () => dispatch => {
    dispatch({ type: STOP_RALLYING })
};