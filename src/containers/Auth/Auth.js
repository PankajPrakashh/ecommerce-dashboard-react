import React, { Component } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

import { appRoute } from '../../routes';
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
    activeBackgroundUrl: '', 
  };
  
  /**
   * Execute once while just after component instance is ready
   */
  componentDidMount() {
    
    // this.setActiveBackgroundUrl();
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
        <Switch>
          <Route path={appRoute.auth.login} component={LoginPage} />
          <Route path={appRoute.auth.passwordReset} component={ForgotPasswordPage} />
          <Route path="*">
            <Redirect to={appRoute.auth.login}/>
          </Route>
        </Switch>

      </div>
    );
  }
  
}
