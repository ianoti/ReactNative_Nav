import firebase from 'firebase';

import {
  EMAIL_CHANGED, PASSWORD_CHANGED, LOGIN_USER_SUCCESS
} from './types';

export const emailChanged = (text) => ({
    type: EMAIL_CHANGED,
    payload: text
  });

export const passwordChanged = (text) => ({
    type: PASSWORD_CHANGED,
    payload: text
  });

export const loginUser = ({ email, password }) => {

  // the following is made possible via the ReduxThunk applied to the store in app.js
  // we are manually dispatching an action
  return (dispatch) => {
    console.log('i goti', email, password);
    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(user => {
        dispatch({ type: LOGIN_USER_SUCCESS, payload: user });
      });
    };
};
