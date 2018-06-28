import React, { PureComponent } from 'react';
import { withRouter } from 'react-router-dom';
import { graphql, compose } from 'react-apollo';
import { saveUserData } from 'helpers/utils';
import { SIGNUP } from 'graphql/mutations';

import Credentials from './';
import {
  isValidCredentials,
  invalidEmail,
  invalidPassword,
  validateEmail,
  validatePassword,
  errorTextIsShowing,
  isEmail
} from './helpers';

class CredentialsContainer extends PureComponent {
  state = {
    email: {
      value: '',
      errorText: 'Email is invalid. Please try again.',
      isValid: false,
      showErrorText: false
    },
    password: {
      value: '',
      errorText: 'Password must be at least five characters.',
      isValid: false,
      showErrorText: false
    }
  };

  handleInputChange = async (e) => {
    const { email, password } = this.state;
    // changedProp is either "email" or "password" depending on which was changed
    const changedProp = e.target.name;

    await this.setState({
      [changedProp]: {
        ...this.state[e.target.name],
        value: e.target.value
      }
    });

    isEmail(changedProp)
      ? this.handleEmailValidation(email)
      : this.handlePasswordValidation(password);
  };

  handleEmailValidation = async (email) => {
    if (invalidEmail(email.value)) return;

    if (errorTextIsShowing(this.state.email)) {
      this.setState({
        email: {
          ...this.state.email,
          showErrorText: false
        }
      });
    }
  };

  handlePasswordValidation = (password) => {
    if (invalidPassword(password.value)) return;

    if (errorTextIsShowing(this.state.password)) {
      this.setState({
        password: {
          ...this.state.password,
          showErrorText: false
        }
      });
    }
  };

  handleFormSubmit = (e) => {
    const { email, password } = this.state;
    const isInvalidEmail = !validateEmail(email.value);
    const isInvalidPassword = !validatePassword(password.value);

    e.preventDefault();

    switch (true) {
      case isInvalidEmail && isInvalidPassword:
        this.setErrorText('email');
        this.setErrorText('password');
        break;
      case isInvalidEmail:
        this.setErrorText('email');
        break;
      case isInvalidPassword:
        this.setErrorText('password');
        break;
      default:
        this.handleValidCredentials(email, password);
        break;
    }

    isValidCredentials(email, password)
      ? this.handleValidCredentials(email, password)
      : this.handleInvalidCredentials();
  };

  handleValidCredentials = async (email, password) => {
    const { signUpMutation, history } = this.props;

    const result = await signUpMutation({
      variables: {
        email: email.value,
        password: password.value
      }
    });

    const { token } = result.data.signUp;

    saveUserData(token);

    history.push('/start/2');
  };

  handleInvalidCredentials = () => {
    this.setState({ isValid: false });
  };

  setErrorText = (prop) => {
    this.setState({
      [prop]: {
        ...this.state[prop],
        showErrorText: true
      }
    });
  };

  render() {
    return (
      <Credentials
        email={this.state.email}
        password={this.state.password}
        handleInputChange={this.handleInputChange}
        handleFormSubmit={this.handleFormSubmit}
        handleBlur={this.handleBlur}
      />
    );
  }
}

export default compose(graphql(SIGNUP, { name: 'signUpMutation' }))(
  withRouter(CredentialsContainer)
);
