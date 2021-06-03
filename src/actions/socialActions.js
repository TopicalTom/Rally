import firestore from '@react-native-firebase/firestore';
import { RETRIEVE_SOCIAL_CIRCLE } from './types';

export const retrieveSocialCircle = () => async (dispatch) => {
    try {
        const socialCircleRef = firestore().collection("social");
        const mySocialCircle = socialCircleRef.where("status", "==", 'Rallying').where("discoverable", "array-contains", 'iOEaqDpLSbelERq4rZdjVyWq8PV2');
        const querySnapshot = await mySocialCircle.get();
        let data = querySnapshot.docs.map(doc => ({
            name: doc._data.name,
            profile: doc._data.profile,
            prompt: doc._data.prompt,
            rally: doc._data.rally
        }));
        dispatch({
            type: RETRIEVE_SOCIAL_CIRCLE,
            payload: data
        })
    } catch (err) {
        console.error(err)
    }
};

export const updateSocialCircle = () => async (dispatch) => {
    try {
        const socialCircleRef = firestore().collection("social");
        const mySocialCircle = socialCircleRef.where("status", "==", 'Rallying').where("discoverable", "array-contains", 'iOEaqDpLSbelERq4rZdjVyWq8PV2');
        mySocialCircle.onSnapshot((querySnapshot) => {
            const data = querySnapshot.docs.map(doc => ({
                name: doc._data.name,
                profile: doc._data.profile,
                prompt: doc._data.prompt,
                rally: doc._data.rally
            }));            
            dispatch({
                type: RETRIEVE_SOCIAL_CIRCLE,
                payload: data
            })
            
        })
    } catch (err) {
        console.error(err)
    }
};