import React from 'react';
import { string, bool, func } from 'prop-types';
import InputStyles from './styles';

const propTypes = {
  type: string,
  name: string,
  placeholder: string,
  value: string,
  autoFocus: bool,
  showErrorStyles: bool,
  handleBlur: func,
  handleInputChange: func
};

const defaultProps = {
  value: '',
  type: '',
  name: '',
  placeholder: '',
  autoFocus: false,
  showErrorStyles: false
};

const Input = ({
  type,
  name,
  value,
  placeholder,
  isValid,
  autoFocus,
  handleInputChange,
  handleBlur,
  showErrorStyles,
  ...props
}) => {
  return (
    <InputStyles
      type={type}
      name={name}
      value={value}
      placeholder={placeholder}
      autoFocus={autoFocus}
      onChange={handleInputChange}
      showErrorStyles={showErrorStyles}
      onBlur={handleBlur}
      {...props}
    />
  );
};

Input.propTypes = propTypes;
Input.defaultProps = defaultProps;

export default Input;
