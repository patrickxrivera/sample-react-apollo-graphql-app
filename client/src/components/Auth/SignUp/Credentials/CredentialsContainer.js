import React, { PureComponent } from 'react';
import { withRouter } from 'react-router-dom';

import Credentials from './';
import { isValidCredentials, validateEmail, validatePassword, errorTextIsShowing } from './helpers';

const isEmail = (val) => val === 'email';

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
    const isInvalidEmail = !validateEmail(email.value);

    if (isInvalidEmail) return;

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
    const isInvalidPassword = !validatePassword(password.value);

    if (isInvalidPassword) return;

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

  handleValidCredentials = (email, password) => {
    this.props.history.push('/start/2');
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

export default withRouter(CredentialsContainer);
