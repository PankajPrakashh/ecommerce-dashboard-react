import * as actionTypes from '../../actions';
import { initialState, login, logout } from './AuthHelper';


/**
 * 
 * @param {any} state 
 * @param {import("../../../model/index").ReduxAction} action 
 */
const authReducer = (state = initialState, action) => {

  // All actions available on the auth reducer
  const actions = {
    [actionTypes.AUTH_LOGIN]: login,
    [actionTypes.AUTH_LOGOUT]: logout,
  };

  // Get the selected action performed on the auth reducer
  const selectedAction = action ? actions[action.type] : null;


  // Execute the reducer helper on valid action dispatch,
  // Otherwise returns the current state
  return selectedAction 
    ? selectedAction(state, action.payload)         // Update the state based on reducer
    : state;                                        // Invalid action type return the same state
};

export default authReducer;