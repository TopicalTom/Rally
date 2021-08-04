import { 
    REMOVE_MEMBER,
    ADD_MEMBER,
    GENERATE_FRIEND_KEYS,
    GENERATE_SQUAD_KEYS,
    CLEAR_CUSTOM_LIST
} from './types';

export const generateFriendKeys = (audience) => (dispatch) => {
    const audienceKeys = audience.map(item => item.uid);
    dispatch({
        type: GENERATE_FRIEND_KEYS,
        payload: audienceKeys
    })
    //callback(type, audienceKeys);
};

export const generateSquadKeys = (audience) => (dispatch) => {
    const audienceKeys = audience.map(item => item.uid);
    dispatch({
        type: GENERATE_SQUAD_KEYS,
        payload: audienceKeys
    })
    //callback(type, audienceKeys);
};

export const clearCustomList = () => (dispatch) => {
    dispatch({
        type: CLEAR_CUSTOM_LIST
    })
};

export const removeMember = (uniqueId) => (dispatch) => {
    dispatch({
        type: REMOVE_MEMBER,
        payload: uniqueId
    })
};

export const addMember = (uniqueId) => (dispatch) => {
    dispatch({
        type: ADD_MEMBER,
        payload: uniqueId
    })
};

/*
export const createAudience = (audience) => (dispatch) => {
    dispatch({
        type: CREATE_AUDIENCE,
        payload: audience
    })
};

*/