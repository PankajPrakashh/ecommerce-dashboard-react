import PropTypes from 'prop-types';
import React from 'react';
import { Button, Card, Form, Icon, Popup } from 'semantic-ui-react';

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
 *  passwordError: { content: string, position: string }
 * }} props 
 */
const Login = (props) => {

  return (
    <Card className={classes.Login}>
      <Card.Content>
        <div className={classes.ProfilePic}>
          <Icon name="user circle outline" size="huge" color="teal" />
        </div>

        <h2 className="mt-0 mb-28">Login to your account</h2>

        <Form autoComplete="off" onSubmit={props.onSubmit}>
          <Form.Input
            focus
            type="email"
            icon="mail outline"
            placeholder="name@dashboard.com"
            width="16"
            name="userId"
            value={props.userId}
            error={props.emailError}
            onChange={props.valueChangeHandler} />

          <Form.Input
            type="password"
            icon="key"
            placeholder="Your secret password"
            width="16"
            name="password"
            value={props.password}
            error={props.passwordError}
            onChange={props.valueChangeHandler} />

          <Form.Group className={classes.Remember}>
            <Form.Checkbox label="Remember Me" name="rememberMe" checked={props.rememberMe} onChange={props.toggleRememberMe} />

            <Popup
              content="Didn't remember your password? Click to reset your password!"
              trigger={ <a href="/">Forgot Password?</a> }>
            </Popup>
              
          </Form.Group>

          <Button
            className="mt-28"
            fluid
            loading={props.progress}
            content="Log In"
            color="teal"
            role="submit"
            type="submit" />
        </Form>

      </Card.Content>
    </Card>
  );
}


Login.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  userId: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  rememberMe: PropTypes.bool.isRequired,
  toggleRememberMe: PropTypes.func.isRequired,
  progress: PropTypes.bool,
};

export default Login;