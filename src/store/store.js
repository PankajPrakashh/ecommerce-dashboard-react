import { combineReducers, compose, createStore } from 'redux';

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
 * Redux dev tools configuration
 * 
 * @see https://github.com/zalmoxisus/redux-devtools-extension
 */
const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) 
  || compose;


/**
 * Root store for the redux app
 */
export const dashboardStore = createStore(
  rootReducer, 
  composeEnhancers()
);