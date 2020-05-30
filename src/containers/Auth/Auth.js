import React, { Component } from 'react';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';

import classes from './Auth.module.scss';
import LoginPage from './LoginPage/LoginPage';

export default class Auth extends Component {

  state = {
    routeConfig: {
      login: '/login',
      signup: '/signup', 
    },
  };

  /**
   * Execute once while just after component instance is ready
   */
  componentDidMount() {
    this.mapRelativePathRoutes();
  }

  /**
   * Maps relative path urls to the absolute path url based on the 
   * current url
   */
  mapRelativePathRoutes = () => {

    const routeConfig = { ...this.state.routeConfig };

    routeConfig.login  = this.props.match.url + routeConfig.login;
    routeConfig.signup = this.props.match.url + routeConfig.signup;

    this.setState({ routeConfig });
  }

  render () {

    return (
      <div className={classes.AuthPage}>
        
        {/* Auth module routing */}
        <BrowserRouter>
          <Switch>
            <Route path={this.state.routeConfig.login} component={LoginPage} exact/>
            <Redirect from="*" to={this.state.routeConfig.login}/>
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
  
}
