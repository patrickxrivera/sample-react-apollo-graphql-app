import React from 'react';
import { string } from 'prop-types';
import InputStyles from './styles';

const propTypes = {
  type: string,
  name: string,
  placeholder: string
};

const defaultProps = {
  type: '',
  name: '',
  placeholder: ''
};

const Input = ({ type, name, placeholder, ...props }) => (
  <InputStyles type={type} name={name} placeholder={placeholder} {...props} />
);

Input.propTypes = propTypes;
Input.defaultProps = defaultProps;

export default Input;
