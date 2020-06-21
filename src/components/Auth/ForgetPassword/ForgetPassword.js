import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Divider, Form } from 'semantic-ui-react';

import withForgotPasswordForm from '../../../hoc/Auth/withForgotPasswordForm';
import { appRoute } from '../../../routes';
import AuthCard from '../AuthCard/AuthCard';
import classes from './ForgetPassword.module.scss';

/**
 * 
 * @param {{
 *  progress?: boolean;
 *  onSubmit: (userId) => {};
 * }} props 
 */
const ForgetPassword = (props) => {



  // Map formik errors to semantic-ui error
  const errors = {
    userId: typeof props.errors.userId !== 'undefined' ? { content: props.errors.userId, pointing: 'below' } : false,
  };

  return (
    <AuthCard className={classes.ForgetPassword} icon="lock" iconSize="big" iconColor="orange" headerTitle="Reset your password">

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

        <Button
          className="border-radius-20 mt-28"
          fluid
          loading={props.progress}
          disabled={props.progress}
          content="Forgot your password"
          color="orange"
          role="submit"
          type="submit" />

        <Divider horizontal>Or</Divider>

        <div className="d-flex justify-space-between">
          <Link to={appRoute.auth.login}>Login</Link>
          <Link to={appRoute.auth.signup}>Signup</Link>
        </div>

      </Form>

    </AuthCard>
  );
};

export default withForgotPasswordForm(ForgetPassword);