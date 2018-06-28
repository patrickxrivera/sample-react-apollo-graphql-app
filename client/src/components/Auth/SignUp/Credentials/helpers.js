/* eslint-disable no-useless-escape */

export const validateEmail = (email) => {
  const validEmailRegex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  return validEmailRegex.test(email);
};

export const validatePassword = (password) => password.length >= 5;

export const isValidCredentials = (email, password) =>
  validateEmail(email) && validatePassword(password);

export const errorTextIsShowing = ({ showErrorText }) => showErrorText;
