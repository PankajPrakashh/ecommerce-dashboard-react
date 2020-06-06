import PropTypes from 'prop-types';
import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { Button, Card, Divider, Form, Icon, Popup } from 'semantic-ui-react';

import withLoginForm from '../../../hoc/Auth/withLoginForm';
import classes from './Login.module.scss';


/**
 * 
 * @param {{ 
 *  values: { userId: string, password: string, rememberMe: string },
 *  progress: boolean,
 *  showSocialLogin: boolean,
 *  socialLogins: string[],
 *  handleChange: () => any,
 *  onSubmit: () => any,
 *  onSocialLogin: (type: string) => any
 *  errors: any,
 * }} props 
 */
const Login = (props) => {


  /**
   * Converts list of social logins array to social login button type
   * 
   */
  const socialLoginTemplates = (props.socialLogins || []).map(
    (key, index) => <Button circular key={index} icon={key} color={key} onClick={() => this.props.onSocialLogin(key)}/>
  );

  const socialLoginTemplate = props.showSocialLogin ? (
    <Fragment>
      <Divider className="mt-24">
        <span className={classes.OtherLoginSeparator}>OR</span>
      </Divider>

      <div className={classes.OtherLogin}>
        { socialLoginTemplates }
      </div>
    </Fragment>
  ) : null;


  // Map formik errors to semantic-ui error
  const errors = {
    userId: typeof props.errors.userId !== 'undefined' ? { content: props.errors.userId, pointing: 'below' } : false,
    password: typeof props.errors.password !== 'undefined' ? { content: props.errors.password, pointing: 'above' } : false
  };


  return (
    <Card className={classes.Login}>
      <Card.Content>
        <div className={classes.ProfilePic}>
          <Icon name="user circle outline" size="huge" color="orange" />
        </div>

        <h2 className="mt-12 mb-28">Login to your account</h2>

        <Form autoComplete="off" onSubmit={props.onSubmit}>
          <Form.Input
            focus
            type="email"
            icon="mail outline"
            placeholder="name@dashboard.com"
            width="16"
            name="userId"
            value={props.values.userId}
            error={errors.userId}
            onChange={props.handleChange} />

          <Form.Input
            type="password"
            icon="key"
            placeholder="Your secret password"
            width="16"
            name="password"
            value={props.values.password}
            error={errors.password}
            onChange={props.handleChange} />

          <Form.Group className={classes.Remember}>
            <Form.Checkbox 
              label="Remember Me"
              name="rememberMe" 
              id="rememberMe"
              checked={props.values.rememberMe} 
              onChange={props.handleChange} />

            <Popup
              content="Didn't remember your password? Click to reset your password!"
              trigger={ 
                <Link to="/auth/password-reset">Forgot Password?</Link>
                // <a href="/">Forgot Password?</a> 
              }>
            </Popup>
              
          </Form.Group>

          <Button
            className="border-radius-20 mt-28"
            fluid
            loading={props.progress}
            disabled={props.progress}
            content="Log In"
            color="orange"
            role="submit"
            type="submit" />
        </Form>

        { socialLoginTemplate }

      </Card.Content>
    </Card>
  );
}


Login.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  progress: PropTypes.bool,
  showSocialLogin: PropTypes.bool,
  socialLogins: PropTypes.arrayOf(PropTypes.string),
};

export default withLoginForm(Login);