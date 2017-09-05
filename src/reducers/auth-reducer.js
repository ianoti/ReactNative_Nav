import { EMAIL_CHANGED, PASSWORD_CHANGED } from '../actions/types';

const INITIAL_STATE = { email: '', password: ' ' };

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case EMAIL_CHANGED:
      // use the spread operator to make a new copy of state and replace the email
      // property of that copied state.
      return { ...state, email: action.payload };
    case PASSWORD_CHANGED:
      return { ...state, password: action.payload };
    default:
      return state;
  }
};
