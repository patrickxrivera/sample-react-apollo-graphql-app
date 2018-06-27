import React from 'react';
import { Button as BootstrapBtn } from 'reactstrap';
import { colors } from '../styles';

const Button = ({ color, children }) => <BootstrapBtn color={color}>{children}</BootstrapBtn>;

Button.defaultProps = {
  color: colors.primary
};

export default Button;
