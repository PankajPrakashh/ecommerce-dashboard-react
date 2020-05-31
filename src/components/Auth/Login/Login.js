import PropTypes from 'prop-types';
import React, { Component, Fragment } from 'react';
import { Button, Card, Divider, Form, Icon, Popup } from 'semantic-ui-react';

import classes from './Login.module.scss';


/**
 * 
 * @param {{ 
 *  onSubmit: () => {}, 
 *  valueChangeHandler: (e, semanticEvent) => {},
 *  userId: string,
 *  password: string,
 *  rememberMe: boolean,
 *  progress: boolean,
 *  emailError: { content: string, position: string }
 *  passwordError: { content: string, position: string },
 *  showSocialLogin: boolean,
 *  socialLogins: string[],
 * }} this.props 
 */
class Login extends Component {


  /**
   * Converts list of social logins array to social login button type
   * 
   * @param {string[]} socialLogins 
   */
  mapSocialLoginToButtons = (socialLogins) => (socialLogins || []).map(
    (key, index) => <Button circular key={index} icon={key} color={key} onClick={() => this.props.onSocialLogin(key)}/>
  );

  render () {

    const socialLoginTemplate = this.props.showSocialLogin ? (
      <Fragment>
        <Divider className="mt-24">
          <span className={classes.OtherLoginSeparator}>OR</span>
        </Divider>
  
        <div className={classes.OtherLogin}>
          { this.mapSocialLoginToButtons(this.props.socialLogins) }
        </div>
      </Fragment>
    ) : null;

    return (
      <Card className={classes.Login}>
        <Card.Content>
          <div className={classes.ProfilePic}>
            <Icon name="user circle outline" size="huge" color="teal" />
          </div>
  
          <h2 className="mt-0 mb-28">Login to your account</h2>
  
          <Form autoComplete="off" onSubmit={this.props.onSubmit}>
            <Form.Input
              focus
              type="email"
              icon="mail outline"
              placeholder="name@dashboard.com"
              width="16"
              name="userId"
              value={this.props.userId}
              error={this.props.emailError}
              onChange={this.props.valueChangeHandler} />
  
            <Form.Input
              type="password"
              icon="key"
              placeholder="Your secret password"
              width="16"
              name="password"
              value={this.props.password}
              error={this.props.passwordError}
              onChange={this.props.valueChangeHandler} />
  
            <Form.Group className={classes.Remember}>
              <Form.Checkbox 
                label="Remember Me" 
                name="rememberMe" 
                checked={this.props.rememberMe} 
                onChange={this.props.toggleRememberMe} />
  
              <Popup
                content="Didn't remember your password? Click to reset your password!"
                trigger={ <a href="/">Forgot Password?</a> }>
              </Popup>
                
            </Form.Group>
  
            <Button
              className="mt-28"
              fluid
              loading={this.props.progress}
              content="Log In"
              color="teal"
              role="submit"
              type="submit" />
          </Form>
  
          {/* <Divider className="my-24">
            <span className={classes.OtherLoginSeparator}>OR</span>
          </Divider>
  
          <div className={classes.OtherLogin}>
            <Icon name="facebook f" color="blue" />
          </div> */}

          { socialLoginTemplate }
  
        </Card.Content>
      </Card>
    );
  }

}


Login.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  userId: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  rememberMe: PropTypes.bool.isRequired,
  toggleRememberMe: PropTypes.func.isRequired,
  progress: PropTypes.bool,
  showSocialLogin: PropTypes.bool,
  socialLogins: PropTypes.arrayOf(PropTypes.string),
};

export default Login;