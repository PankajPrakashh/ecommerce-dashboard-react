import React, { Component } from 'react';
import { Transition } from 'semantic-ui-react';

import Login from '../../../components/Auth/Login/Login';

export default class LoginPage extends Component {
  state = {
    loginDetails: {
      userId: "",
      password: "",
      rememberMe: false,
    },
    visible: false,
    loginProgress: false,
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
    this.setState((prevState) => ({ showError: { email: true, password: true }}));
  }

  /**
   * Login button click handler
   */
  loginHandler = () => {
    console.log(this.state);

    this.setLoginProgress(true);

    this.setLoginErrors();
  };


  render() {
    return (

      <Transition visible={this.state.visible} animation="fade up" duration={600}>

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
          />
        </div>

      </Transition>
    );
  }
}
