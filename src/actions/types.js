import { createAction } from '@reduxjs/toolkit';

// Auth
export const LOGIN_SUCCESS = createAction('LOGIN_SUCCESS');
export const LOGIN_FAIL = createAction('LOGIN_FAIL');

// Rally
export const START_RALLYING = createAction('START_RALLYING');
export const STOP_RALLYING = createAction('STOP_RALLYING');

// Audience
export const GENERATE_AUDIENCE_KEYS = createAction('GENERATE_AUDIENCE_KEYS');
export const ADD_MEMBER = createAction('ADD_MEMBER');
export const REMOVE_MEMBER = createAction('REMOVE_MEMBER');
export const CREATE_AUDIENCE = createAction('CREATE_AUDIENCE');
export const CLEAR_AUDIENCE = createAction('CLEAR_AUDIENCE');

// General
export const RETRIEVE_SOCIAL_CIRCLE = createAction('RETRIEVE_SOCIAL_CIRCLE');
export const RETRIEVE_FRIENDS_LIST = createAction('RETRIEVE_FRIENDS_LIST');
export const RETRIEVE_FRIEND_KEYS = createAction('RETRIEVE_FRIEND_KEYS');
export const RETRIEVE_SQUADS = createAction('RETRIEVE_SQUADS');