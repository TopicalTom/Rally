import firestore from '@react-native-firebase/firestore';
import { 
    RETRIEVE_CHATS,
    RETRIEVE_CHAT,
} from './types';

// firestore.FieldPath.documentId()

export const retrieveChats = () => async (dispatch) => {
    try {
        const chatsRef = firestore().collection("chats");
        const myChats = chatsRef.where("owners", "array-contains", 'iOEaqDpLSbelERq4rZdjVyWq8PV2');
        const querySnapshot = await myChats.get();

        //console.log(querySnapshot.docs);
        let newData = querySnapshot.docs.map(docData => ({
            user: docData._data.users[1],
            recentMessage: docData._data.messages[docData._data.messages.length - 1],
            chatId: docData.id
        }));   
        if (newData) {
            dispatch({
                type: RETRIEVE_CHATS,
                payload: newData
            })
        }
    } catch (err) {
        console.error(err)
    }
};

export const updateChats = () => (dispatch) => {
    try {
        const chatsRef = firestore().collection("chats");
        const myChats = chatsRef.where("owners", "array-contains", 'iOEaqDpLSbelERq4rZdjVyWq8PV2');
        myChats.onSnapshot((querySnapshot) => {
            let newData = querySnapshot.docs.map(docData => ({
                user: docData._data.users[1],
                recentMessage: docData._data.messages[docData._data.messages.length - 1],
                chatId: docData.id
            }));    
            if (newData) {
                dispatch({
                    type: RETRIEVE_CHATS,
                    payload: newData
                })
            }
        })
    } catch (err) {
        console.error(err)
    }
};

export const retrieveChat = (chatId) => async (dispatch) => {
    if (!chatId) { return };
    try {
        const chatRef = firestore().collection("chats").doc(chatId);
        const querySnapshot = await chatRef.get();
        let newData = querySnapshot._data.messages;
        if (newData) {
            console.log('Test', newData)
            dispatch({
                type: RETRIEVE_CHAT,
                payload: newData
            })
        }
    } catch (err) {
        console.error(err)
    }
};

export const updateMessages = (chatId) => (dispatch) => {
    if (!chatId) { return };
    try {
        const chatRef = firestore().collection("chats").doc(chatId);
        chatRef.onSnapshot((querySnapshot) => {
            let newData = querySnapshot._data.messages;
            if (newData) {
                console.log('Test', newData)
                dispatch({
                    type: RETRIEVE_CHAT,
                    payload: newData
                })
            }
        })
    } catch (err) {
        console.error(err)
    }
};

export const sendMessage = async (chatId, userId, newMessage) => {
    if (!chatId && !userId && !newMessage) { return };
    try {
        const chatRef = firestore().collection("chats").doc(chatId);
        await chatRef.update({
            messages: firestore.FieldValue.arrayUnion({
                owner: userId,
                message: newMessage,
                timestamp: new Date()
            })
        })
    } catch (err) {
        console.error(err)
    }
};