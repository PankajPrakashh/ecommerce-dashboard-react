import React, { Component } from 'react';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';

import classes from './Auth.module.scss';
import ForgotPasswordPage from './ForgotPasswordPage/ForgotPasswordPage';
import LoginPage from './LoginPage/LoginPage';



const backgroundUrls = [
  '../../assets/images/backgrounds/mountain-1.jpeg',
  '../../assets/images/backgrounds/mountain-2.jpeg',
  '../../assets/images/backgrounds/mountain-3.jpeg',
];

export default class Auth extends Component {

  state = {

    // NOTE: Ensure you also update the route configuration in mapRelativePathRoutes
    routeConfig: {
      login: '/login',
      signup: '/signup',
      forgotPassword: '/password-reset'
    },
    activeBackgroundUrl: '', 
  };

  /**
   * Execute once while just after component instance is ready
   */
  componentDidMount() {
    this.mapRelativePathRoutes();
    
    // this.setActiveBackgroundUrl();
  }

  /**
   * Maps relative path urls to the absolute path url based on the 
   * current url
   */
  mapRelativePathRoutes = () => {

    const routeConfig = { ...this.state.routeConfig };

    routeConfig.login          = this.props.match.url + routeConfig.login;
    routeConfig.signup         = this.props.match.url + routeConfig.signup;
    routeConfig.forgotPassword = this.props.match.url + routeConfig.forgotPassword;

    this.setState({ routeConfig: routeConfig });
  }

  /**
   * Sets a random active background url.
   */
  setActiveBackgroundUrl = () => {

    // Get total number of images available
    const totalImages = backgroundUrls.length;

    // Get a random image from the list
    const randomImageIndex = Math.floor(Math.random() * (totalImages - 0) + 0);

    this.setState({
      activeBackgroundUrl: backgroundUrls[randomImageIndex],
    });
  }

  render () {

    return (
      <div className={[classes.AuthPage, classes.CenterContent].join(' ')}>
        
        {/* Auth module routing */}
        <BrowserRouter>
          <Switch>
            <Route path={this.state.routeConfig.login} component={LoginPage} />
            <Route path={this.state.routeConfig.forgotPassword} component={ForgotPasswordPage}/>
            <Redirect from="*" to={this.state.routeConfig.login}/>
          </Switch>
        </BrowserRouter>

      </div>
    );
  }
  
}
