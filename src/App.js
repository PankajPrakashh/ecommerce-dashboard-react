import React, { Component } from 'react';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';

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
      </div>
    );
  }
}

export default App;
