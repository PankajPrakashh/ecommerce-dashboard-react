import React, { Component } from 'react';
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
    loginDetails: {
      userId: "",
      password: "",
      rememberMe: false,
    },
    loginProgress: false,
    loginDisabled: false,
    error: {
      email: {
        content: 'Please enter a valid email address',
        pointing: 'below',
      },
      password: {
        content: 'Password is required',
        pointing: 'above',
      }
    },
    showError: {
      email: false,
      password: false,
    },
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
   * Input fields value change handler
   */
  valueChangeHandler = (e, { name, value }) => {

    const loginDetails = { ...this.state.loginDetails };

    loginDetails[name] = value;

    this.setState({ loginDetails });
  };

  /**
   * Toggles remember me
   */
  toggleRememberMe = () => {

    this.setState(prevState => {
      const loginDetails = { ...this.state.loginDetails };
  
      loginDetails.rememberMe = !prevState.loginDetails.rememberMe;

      return { loginDetails: loginDetails };
    });
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
  setLoginErrors = () => {
    this.setState((prevState) => ({ 
      showError: { email: true, password: true },
      animation: semanticUITransitionOptionsMap.shake,
      visible: !prevState.visible
    }));
  }

  /**
   * Social login click handler
   */
  socialLoginHandler = (loginWith) => {
    console.log('Dummy social login with ', loginWith);
  }

  /**
   * Login button click handler
   */
  loginHandler = () => {

    // Extract login details from state
    const loginDetails = { ...this.state.loginDetails };
    
    console.log(loginDetails);

    this.setLoginProgress(true);

    // Validate login details with API
    this._validateLoginWithApi(loginDetails);
  };

  /**
   * Send the login details to api and validate it for correctness.
   */
  _validateLoginWithApi = (login) => {

    // TODO Send login details to API

    // TODO Call the success and failed login handler based on login 

    this._failedLoginHandler();
  }

  /**
   * Successful login handler
   * 
   * #TODO Implement success login handler
   */
  _successLoginHandler = (response) => {
    console.log('Login success');
  }

  /**
   * Failed Login handler method
   * 
   * #TODO Implement failed login handler
   */
  _failedLoginHandler = (response) => {
    console.log('Login failed');

    this._shakeLoginForm();
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
            valueChangeHandler={this.valueChangeHandler}
            userId={this.state.loginDetails.userId}
            password={this.state.loginDetails.password}
            rememberMe={this.state.loginDetails.rememberMe}
            toggleRememberMe={this.toggleRememberMe}
            progress={this.state.loginProgress}
            emailError={this.state.showError.email ? this.state.error.email : null}
            passwordError={this.state.showError.password ? this.state.error.password : null}
            showSocialLogin={this.state.showSocialLogin}
            socialLogins={socialLoginOptions}
            onSocialLogin={this.socialLoginHandler}
          />
        </div>

      </Transition>
    );
  }
}
