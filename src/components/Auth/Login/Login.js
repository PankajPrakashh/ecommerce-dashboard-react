import PropTypes from 'prop-types';
import React from 'react';
import { Button, Card, Form, Icon } from 'semantic-ui-react';

import classes from './Login.module.scss';

const Login = (props) => {

  return (
    <Card className={classes.Login}>
      <Card.Content>
        <div className={classes.ProfilePic}>
          <Icon name="user circle outline" size="huge" color="teal" />
        </div>

        <h2 className="mt-12">Log In</h2>

        <Form onSubmit={props.onSubmit}>
          <Form.Input
            focus
            type="email"
            placeholder="Enter your email/user Id"
            width="16"
            name="userId"
            value={props.userId}
            onChange={props.valueChangeHandler} />

          <Form.Input
            type="password"
            placeholder="Enter your account password"
            width="16"
            name="password"
            value={props.password}
            onChange={props.valueChangeHandler} />

          <Form.Group className={classes.Remember}>
            <Form.Checkbox label="Remember Me" name="rememberMe" checked={props.rememberMe} onChange={props.toggleRememberMe} />
            <a href="/">Forgot Password</a>
          </Form.Group>

          <Button
            className="mt-28"
            fluid
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
};

export default Login;