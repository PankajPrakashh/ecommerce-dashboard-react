import { Map } from 'immutable';

const initialState = Map({
  profile: Map({
    userId: '',
    firstName: '',
    lastName: '',
    email: '',
    avatar: '',
  })
});

/**
 * 
 * @param {Map} state 
 * @param {import("../../../model").ReduxAction} action 
 */
const userReducer = (state = initialState, action) => {

  return state;
};

export default userReducer;