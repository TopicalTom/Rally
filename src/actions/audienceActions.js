import { 
    REMOVE_MEMBER,
    ADD_MEMBER,
    GENERATE_AUDIENCE_KEYS,
    CREATE_AUDIENCE,
    CLEAR_AUDIENCE
} from './types';

export const generateAudienceKeys = (type, audience, callback) => (dispatch) => {
    const audienceKeys = audience.map(item => item.uid);
    dispatch({
        type: GENERATE_AUDIENCE_KEYS,
        payload: audienceKeys
    })
    callback(type, audienceKeys);
};

export const createAudience = (audience) => (dispatch) => {
    dispatch({
        type: CREATE_AUDIENCE,
        payload: audience
    })
};

export const clearAudience = () => (dispatch) => {
    dispatch({
        type: CLEAR_AUDIENCE
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