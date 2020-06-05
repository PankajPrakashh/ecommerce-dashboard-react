import React, { Component } from 'react';
import { toast } from 'react-toastify';
import { Transition } from 'semantic-ui-react';

import Login from '../../../components/Auth/Login/Login';
import { semanticUITransitionOptionsMap } from '../../../constants/SemanticsUI';

const socialLoginOptions = [
  'facebook',
  'twitter',
  'linkedin',
];

export default class LoginPage extends Component {
  state = {
    loginProgress: false,
    loginDisabled: false,
    showSocialLogin: true,
    visible: false,
    animation: semanticUITransitionOptionsMap.fadeUp
  };

  componentDidMount() {
    this.showLoginComponent();
  }

  /**
   * Shows the login component after delay.
   * 
   * This delay is essential for semantic UI transition animation.
   */
  showLoginComponent = () => {
    setTimeout(() => this.setState({ visible: true }), 50);
  }


  /**
   * Sets login progress mode to true.
   * 
   * @param {boolean} val
   */
  setLoginProgress = (val) => {
    this.setState({ loginProgress: val })
  }

  /**
   */
  _setErrorAnimation = () => {
    this.setState((prevState) => ({ 
      animation: semanticUITransitionOptionsMap.shake,
      visible: !prevState.visible
    }));
  }

  /**
   * Sets login success animation to the login component. 
   * Fades down the login component and changes the route.
   */
  _setSuccessAnimation = () => {
    this.setState((prevState) => ({
      animation: semanticUITransitionOptionsMap.fadeDown,
      visible: !prevState.visible
    }))
  }

  /**
   * Social login click handler
   */
  socialLoginHandler = (loginWith) => {
    console.log('Dummy social login with ', loginWith);
  }

  /**
   * Login button click handler
   * 
   * @param {import('../../../model/Auth').IAuth} authDetails
   */
  loginHandler = async (authDetails) => {
    
    // console.log(authDetails);

    // Validate login details with API
    return this._validateLoginWithApi(authDetails);
  };

  /**
   * Send the login details to api and validate it for correctness.
   * 
   * @param {import('../../../model/Auth').IAuth} login
   */
  _validateLoginWithApi = async (login) => {

    // TODO Send login details to API

    // TODO Call the success and failed login handler based on login 

    return new Promise((reject, resolve) => {

      // Set login progress 
      this.setLoginProgress(true);

      // Ensure some delay to fake API call
      setTimeout(() => {

        if (login.userId === 'admin@admin.com' && login.password === 'admin') {
          resolve(this._successLoginHandler());
        } else {
          reject(this._failedLoginHandler());
        }

        this.setLoginProgress(false);
        
      }, 2000);
    }); 
  }

  /**
   * Successful login handler
   * 
   * #TODO Implement success login handler
   */
  _successLoginHandler = async (response) => {
    console.log('Login success');

    // BUG Works correctly without error shows issues when it form has error first 
    this._setSuccessAnimation();

    return true;
  }

  /**
   * Failed Login handler method
   * 
   * #TODO Implement failed login handler
   * 
   * @param {import('../../../model/Auth').IAuth} loginDetails
   * @param {any} response
   */
  _failedLoginHandler = async (loginDetails, response) => {
    // console.log('Login failed');

    toast('Use admin@admin.com (admin)', {
      position: "bottom-center",
      autoClose: 5000,
      hideProgressBar: true,
      closeOnClick: true,
      bodyClassName: 'text-primary'
    });

    this._shakeLoginForm();

    return false;
  }

  /**
   * Animates the login for with shake animation. Use this method 
   * generally on failed login.
   */
  _shakeLoginForm = () => {
    this.setState(prevState => ({ 
      animation: semanticUITransitionOptionsMap.shake,
      visible: !prevState.visible
    }));
  }


  render() {
    return (

      <Transition visible={this.state.visible} animation={this.state.animation} duration={600}>

        {/* Without container transition does not work for custom components */}
        <div>
          <Login
            {...this.props}
            onSubmit={this.loginHandler}
            progress={this.state.loginProgress}
            showSocialLogin={this.state.showSocialLogin}
            socialLogins={socialLoginOptions}
            onSocialLogin={this.socialLoginHandler}
            loginErrors={null}
          />
        </div>

      </Transition>
    );
  }
}
