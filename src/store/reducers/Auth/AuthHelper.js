import { Map } from 'immutable';

/**
 * Auth reducer initial state
 */
export const initialState = Map({
  userId: '',
  password: '',
  rememberMe: false,
});

/**
 * Updates the login state
 * 
 * @param {import("../../../model").IAuth} payload
 */
export const login = (state, payload) => {
  
  const previousState = Map({...state});
  
  // Merge previous state with the new state
  return {
    ...previousState,
    userId: payload.userId,
    password: payload.password,
    rememberMe: payload.rememberMe,
  };
}

/**
 * Returns new object by clearing login state
 */
export const logout = (state, payload) => {

  const previousState = Map({ ...state });

  // Merge previous state with the new state
  return {
    ...previousState,
    ...initialState,
  };
}