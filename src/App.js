import React, { Component } from 'react';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

import Auth from './containers/Auth/Auth';


class App extends Component {

  state = {
    routeConfig: {
      auth: '/auth',
    }
  };

  render () {

    return (
      <div>

        {/* Root routing */}
        <BrowserRouter>
          <Switch>
            <Route path={this.state.routeConfig.auth} exact component={Auth}/>
            <Redirect from="*" to={this.state.routeConfig.auth}/>
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
