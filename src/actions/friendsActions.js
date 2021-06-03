import firestore from '@react-native-firebase/firestore';
import { 
    RETRIEVE_FRIENDS_LIST, 
    RETRIEVE_FRIEND_KEYS,  
} from './types';

export const retrieveFriendsList = () => async (dispatch) => {
    try {
        const friendsCollection = firestore().collection("friends").doc('iOEaqDpLSbelERq4rZdjVyWq8PV2');
        const querySnapshot = await friendsCollection.get();
        let data = querySnapshot._data;
        dispatch({
            type: RETRIEVE_FRIENDS_LIST,
            payload: data
        })
    } catch (err) {
        console.log('unable to retrieve friends list', error.message);
    }
};


export const retrieveFriendKeys = () => async (dispatch) => {
    try {
        const friendsCollection = firestore().collection("friends").doc('iOEaqDpLSbelERq4rZdjVyWq8PV2');
        const querySnapshot = await friendsCollection.get();
        const data = querySnapshot._data.currentFriends.map(item => item.uid);
        dispatch({
            type: RETRIEVE_FRIEND_KEYS,
            payload: data
        })
    } catch (err) {
        console.log('unable to retrieve friends keys', error.message);
    }
};


/*
export const retrieveFriendKeys = () => async (dispatch) => {
    try {
        const friendsCollection = firestore().collection("friends").doc('iOEaqDpLSbelERq4rZdjVyWq8PV2');
        const querySnapshot = await friendsCollection.get();
        let data = querySnapshot._data.currentFriends;
        dispatch({
            type: RETRIEVE_FRIEND_KEYS,
            payload: data
        })
    } catch (err) {
        console.log('unable to retrieve friends keys', error.message);
    }
};
*/

/*
export const retrieveFriendsList = async () => {
    try {
        const friendsCollection = firestore().collection("users").doc('iOEaqDpLSbelERq4rZdjVyWq8PV2').collection('socialCircle').doc('friends');
        const preliminaryQuerySnapshot = await friendsCollection.get();
        let data = preliminaryQuerySnapshot._data.users;

        console.log(data);
        //const usersCollection = firestore().collection("users").where(firestore.FieldPath.documentId(), 'in', data);
        //const querySnapshot = await usersCollection.get();
        //let friendsList = querySnapshot._data;
        //console.log(friendsList);
        
    } catch (err) {
        console.error(err)
    }
};
*/