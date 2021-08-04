import { createAction } from '@reduxjs/toolkit';

// Auth
export const LOGIN_SUCCESS = createAction('LOGIN_SUCCESS');
export const LOGIN_FAIL = createAction('LOGIN_FAIL');

// Rally
export const START_RALLYING = createAction('START_RALLYING');
export const STOP_RALLYING = createAction('STOP_RALLYING');

// Audience
export const GENERATE_FRIEND_KEYS = createAction('GENERATE_FRIEND_KEYS');
export const GENERATE_SQUAD_KEYS = createAction('GENERATE_SQUAD_KEYS');
export const ADD_MEMBER = createAction('ADD_MEMBER');
export const REMOVE_MEMBER = createAction('REMOVE_MEMBER');
export const CLEAR_CUSTOM_LIST = createAction('CLEAR_CUSTOM_LIST');

// General
export const RETRIEVE_SOCIAL_CIRCLE = createAction('RETRIEVE_SOCIAL_CIRCLE');
export const RETRIEVE_FRIENDS_LIST = createAction('RETRIEVE_FRIENDS_LIST');
export const RETRIEVE_FRIEND_KEYS = createAction('RETRIEVE_FRIEND_KEYS');
export const RETRIEVE_SQUADS = createAction('RETRIEVE_SQUADS');

// Chats
export const RETRIEVE_CHATS = createAction('RETRIEVE_CHATS');
export const RETRIEVE_CHAT = createAction('RETRIEVE_CHAT');