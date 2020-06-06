import React from 'react';

import AuthCard from '../AuthCard/AuthCard';
import classes from './ForgetPassword.module.scss';

/**
 * 
 * @param {{
 *  progress?: boolean
 * }} props 
 */
const ForgetPassword = (props) => {
  return (
    <AuthCard className={classes.ForgetPassword} icon="lock" iconSize="big" iconColor="orange" headerTitle="Reset your password">
      Forget password works
    </AuthCard>
  );
};

export default ForgetPassword;