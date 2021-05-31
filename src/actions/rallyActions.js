import firestore from '@react-native-firebase/firestore';
import { 
    START_RALLYING,
    STOP_RALLYING
} from './types';


export const fetchSocialCircle = async () => {
    const socialCircleRef = firestore().collection("social");
    const newSocial = await socialCircleRef
        .where("status", "==", 'Rallying')
        .where("discoverable", "array-contains", 'iOEaqDpLSbelERq4rZdjVyWq8PV2')
        .get()
        .then((querySnapshot) => {
            const data = querySnapshot.docs.map(doc => ({
                name: doc._data.name,
                profile: doc._data.profile,
                prompt: doc._data.prompt,
                rally: doc._data.rally
            }));

           return data;
        })
        .catch((error) => {
            console.log("Error getting documents: ", error);
        });
};

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
            discoverable: ["Yx6JoIWFBoGY82GoDwVm", "iOEaqDpLSbelERq4rZdjVyWq8PV2"]
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
            coord: {
                lat: -47,
                long: 23
            },
            discoverable: ["Yx6JoIWFBoGY82GoDwVm", "iOEaqDpLSbelERq4rZdjVyWq8PV2"]
        });
    } catch (error) {
        console.log('error broadcasting ', error.message)
    }
};

export const startRallying = (interest, accent, accentBorder, accentTint) => dispatch => {

    console.log('Happened')
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