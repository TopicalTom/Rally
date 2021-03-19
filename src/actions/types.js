import { createAction } from '@reduxjs/toolkit';

export const LOGIN_SUCCESS = createAction('LOGIN_SUCCESS');
export const LOGIN_FAIL = createAction('LOGIN_FAIL');
export const START_RALLYING = createAction('START_RALLYING');
export const STOP_RALLYING = createAction('STOP_RALLYING');