import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import authAction from './authAction';

const initialState = { name: null, email: null };
const user = createReducer(initialState, {
  [authAction.registerSuccess]: (state, { payload }) => payload.user,
  [authAction.loginSuccess]: (state, { payload }) => payload.user,
  [authAction.getCurrentUserSuccess]: (state, { payload }) => payload,
  [authAction.logoutSuccess]: () => initialState,
});
const token = createReducer(null, {
  [authAction.registerSuccess]: (state, { payload }) => payload.token,
  [authAction.loginSuccess]: (state, { payload }) => payload.token,
  [authAction.logoutSuccess]: () => null,
});
const error = createReducer(null, {
  [authAction.registerError]: (state, { payload }) => payload,
  [authAction.loginError]: (state, { payload }) => payload,
  [authAction.getCurrentUserError]: (state, { payload }) => payload,
  [authAction.logoutError]: (state, { payload }) => payload,
});
export default combineReducers({
  user: user,
  token: token,
  error: error,
});
