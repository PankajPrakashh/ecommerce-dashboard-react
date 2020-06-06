import './index.scss';
import 'react-toastify/dist/ReactToastify.css';
import 'semantic-ui-css/semantic.min.css';

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import App from './App';
import * as serviceWorker from './serviceWorker';
import { dashboardStore } from './store/store';

/// <reference path= "./model/index.d.ts" />


ReactDOM.render(

  <Provider store={dashboardStore}>
    <App />
  </Provider>,

  // Disable strict mode as its throwing error with semantic UI
  // <React.StrictMode>
  // </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
