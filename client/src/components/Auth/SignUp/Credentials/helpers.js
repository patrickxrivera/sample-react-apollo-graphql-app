/* eslint-disable no-useless-escape */

import { not } from 'helpers/utils';

export const validateEmail = (email) => {
  const validEmailRegex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  return validEmailRegex.test(email);
};

export const invalidEmail = not(validateEmail);

export const validatePassword = (password) => password.length >= 5;

export const invalidPassword = not(validatePassword);

export const isValidCredentials = (email, password) =>
  validateEmail(email) && validatePassword(password);

export const errorTextIsShowing = ({ showErrorText }) => showErrorText;

export const isEmail = (val) => val === 'email';
