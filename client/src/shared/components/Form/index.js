import React from 'react';
import { FormStyles, FormHeadingStyles } from './styles';

const Form = ({ children, props }) => <FormStyles {...props}>{children}</FormStyles>;

const FormHeading = ({ children, props }) => (
  <FormHeadingStyles {...props}>{children}</FormHeadingStyles>
);

export { Form, FormHeading };
