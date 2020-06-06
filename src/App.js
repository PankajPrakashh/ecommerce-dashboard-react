import React, { Component } from 'react';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

import Auth from './containers/Auth/Auth';
import { appRoute } from './routes';


class App extends Component {

  render () {

    return (
      <div>

        {/* Root routing */}
        <BrowserRouter>
          <Switch>
            <Route path={appRoute.auth.root} component={Auth}/>

            <Route path="*">
              <Redirect to={appRoute.notFound}/>
            </Route>
          </Switch>
        </BrowserRouter>


        {/* Toast messages */}
        <ToastContainer 
          position="bottom-center"
          autoClose={5000}
          hideProgressBar
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable={false}
          pauseOnHover/>
      </div>
    );
  }
}

export default App;
