import { createAction } from '@reduxjs/toolkit';

export const LOGIN_SUCCESS = createAction('LOGIN_SUCCESS');
export const LOGIN_FAIL = createAction('LOGIN_FAIL');
export const START_RALLYING = createAction('START_RALLYING');
export const STOP_RALLYING = createAction('STOP_RALLYING');
export const RETRIEVE_SOCIAL_CIRCLE = createAction('RETRIEVE_SOCIAL_CIRCLE');
export const RETRIEVE_FRIENDS_LIST = createAction('RETRIEVE_FRIENDS_LIST');
export const RETRIEVE_FRIEND_KEYS = createAction('RETRIEVE_FRIEND_KEYS');
export const RETRIEVE_SQUADS = createAction('RETRIEVE_SQUADS');