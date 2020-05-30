import React, { Component } from 'react';

import Login from '../../../components/Auth/Login/Login';

export default class LoginPage extends Component {
  state = {
    userId: "",
    password: "",
    rememberMe: false,
  };

  /**
   * Input fields value change handler
   */
  valueChangeHandler = (e, { name, value }) => {
    this.setState({ [name]: value });
  };

  /**
   * Toggles remember me
   */
  toggleRememberMe = () => {
    this.setState(prevState => ({ rememberMe: !prevState.rememberMe}));
  }

  /**
   * Login button click handler
   */
  loginHandler = () => {
    console.log(this.state);
  };

  render() {
    return (
      <Login
        {...this.props}
        onSubmit={this.loginHandler}
        valueChangeHandler={this.valueChangeHandler}
        userId={this.state.userId}
        password={this.state.password}
        rememberMe={this.state.rememberMe}
        toggleRememberMe={this.toggleRememberMe}
      />
    );
  }
}
