import React from 'react';
import { Button as BootstrapBtn } from 'reactstrap';

const Button = ({ color, children }) => <BootstrapBtn color={color}>{children}</BootstrapBtn>;

export default Button;
