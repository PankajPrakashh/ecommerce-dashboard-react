import { Formik } from 'formik';
import React, { Component } from 'react';
import * as yup from 'yup';


function withLoginForm (LoginComponent) {

  return class extends Component {

    /**
     * Form validation schema
     */
    validationSchema = yup.object().shape({
      userId: yup
        .string()
        .trim()
        .email('Please enter a valid email'),
      password: yup
        .string()
        .trim()
    });

    initialValues = {
      userId: '',
      password: '',
      rememberMe: false,
    };

    /**
     * Validates the login form for errors. If the form contains error
     * then it displays appropriate error otherwise calls the `onSubmit`
     * method of `props`.
     * 
     * @param {import('../../model/Auth').IAuth} value
     * @param {import('formik').FormikHelpers} actions
     */
    onSubmit = async (value, actions) => {

      const errors = this._validateForm(value);

      if (errors) {
        // Error in form set Formik errors
        actions.setErrors(errors);
        
        return;
      } 

      // No errors continue ahead
      try {
        await this.props.onSubmit(value);
      } catch (e) {
        console.error('Unable to login in. ', e);
      }
    }

    /**
     * Validates the login form, returns error string as object if invalid.
     * 
     * Returns Formik error if form is invalid otherwise returns `false` if 
     * form is valid.
     * 
     * @param {import('../../model/Auth').IAuth} value
     * @returns {{[key: string]: string} | false}
     */
    _validateForm = (value) => {

      let errors = {};
      let hasError = false;

      // Check errors in user id
      if (!value.userId) {
        hasError = true;
        errors.userId = 'Please provide your login id';
      } 

      // Check errors in password
      if (!value.password) {
        hasError = true;
        errors.password = 'Provide your login password';
      }

      // If form is invalid and contains error then return the error
      // otherwise return false
      return hasError ? errors : false;
    }
    
    render() {
      return (
        <Formik
          initialValues={this.initialValues}
          validationSchema={this.validationSchema}
          onSubmit={this.onSubmit}>
          {props => 
            <LoginComponent {...this.props} 
              values={props.values} 
              errors={props.errors}
              onSubmit={props.handleSubmit}
              handleChange={props.handleChange}/>
          }
        </Formik>
      )
    }
  }
}

export default withLoginForm;