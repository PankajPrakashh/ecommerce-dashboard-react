import { combineReducers, createStore } from 'redux';

import authReducer from './reducers/Auth/AuthReducer';


/**
 * List of reducers divided based on the module/page.
 * Where key specifies the module name and its value must be a valid
 * redux reducer.
 */
const rootReducer = combineReducers({
  auth: authReducer
});


/**
 * Root store for the redux app
 */
export const dashboardStore = createStore(rootReducer);