import firestore from '@react-native-firebase/firestore';
import { RETRIEVE_SOCIAL_CIRCLE } from './types';

export const retrieveSocialCircle = (interest) => async (dispatch) => {
    try {
        const socialCircleRef = firestore().collection("social");
        const mySocialCircle = socialCircleRef.where("status", "==", 'Rallying').where("discoverable", "array-contains", 'iOEaqDpLSbelERq4rZdjVyWq8PV2');
        const querySnapshot = await mySocialCircle.get();
        let data = querySnapshot.docs.map(doc => ({
            uid: doc._data.uid,
            name: doc._data.name,
            profile: doc._data.profile,
            prompt: doc._data.prompt,
            rally: doc._data.rally,
        }));
        if (interest) {
            const sortedData = data.sort(item => item.rally === interest).reverse();
            dispatch({
                type: RETRIEVE_SOCIAL_CIRCLE,
                payload: sortedData
            })
        } else {
            dispatch({
                type: RETRIEVE_SOCIAL_CIRCLE,
                payload: data
            })
        };
    } catch (err) {
        console.error(err)
    }
};

export const updateSocialCircle = (interest) => async (dispatch) => {
    try {
        const socialCircleRef = firestore().collection("social");
        const mySocialCircle = socialCircleRef.where("status", "==", 'Rallying').where("discoverable", "array-contains", 'iOEaqDpLSbelERq4rZdjVyWq8PV2');
        mySocialCircle.onSnapshot((querySnapshot) => {
            const data = querySnapshot.docs.map(doc => ({
                uid: doc._data.uid,
                name: doc._data.name,
                profile: doc._data.profile,
                prompt: doc._data.prompt,
                rally: doc._data.rally
            }));            
            if (interest) {
                const sortedData = data.sort(item => item.rally === interest).reverse();
                dispatch({
                    type: RETRIEVE_SOCIAL_CIRCLE,
                    payload: sortedData
                })
            } else {
                dispatch({
                    type: RETRIEVE_SOCIAL_CIRCLE,
                    payload: data
                })
            };  
        })
    } catch (err) {
        console.error(err)
    }
};