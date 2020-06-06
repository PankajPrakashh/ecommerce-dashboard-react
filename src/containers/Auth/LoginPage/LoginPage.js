import React, { Component } from 'react';
import { connect } from 'react-redux';
import { toast } from 'react-toastify';
import { Transition } from 'semantic-ui-react';

import Login from '../../../components/Auth/Login/Login';
import { semanticUITransitionOptionsMap } from '../../../constants/SemanticsUI';
import * as actionTypes from '../../../store/actions';

const socialLoginOptions = [
  'facebook',
  'twitter',
  'linkedin',
];

class LoginPage extends Component {
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

  componentWillUnmount() {
    this.hideLoginComponent();
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
   * Hides the login component.
   * Fades down the login component and changes the route.
   */
  hideLoginComponent = () => {
    this.setState((prevState) => ({
      animation: semanticUITransitionOptionsMap.fadeDown,
      visible: !prevState.visible
    }));
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
          resolve(this._successLoginHandler(login, null));
        } else {
          reject(this._failedLoginHandler());
        }

        this.setLoginProgress(false);
        
      }, 1500);
    }); 
  }

  /**
   * Successful login handler
   * 
   * #TODO Implement success login handler
   * 
   * @param {import('../../../model').IAuth} request
   * @param {any} response
   */
  _successLoginHandler = async (request, response) => {
    
    console.log('Login success');

    // BUG Works correctly without error shows issues when it form has error first 
    this.hideLoginComponent();

    // Update the store with the login details
    this.props.onLogin(request);

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

      <Transition visible={this.state.visible} animation={this.state.animation} duration={400}>

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



// Connect component with the redux

const mapStateToProps = state => ({
  auth: {
    userId: state.auth.userId,
    password: state.auth.password,
  }
});

const mapDispatchToProps = dispatch => ({
  
  /**
   * @param {import('../../../model').IAuth} payload
   */
  onLogin: (payload) => dispatch({type: actionTypes.AUTH_LOGIN, payload})
}); 

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);