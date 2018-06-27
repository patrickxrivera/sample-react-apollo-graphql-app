import React from 'react';
import { string } from 'prop-types';

import ButtonStyles from './styles';
import { colors, sizes } from 'shared/styles';

const propTypes = {
  color: string,
  hoverColor: string,
  width: string,
  height: string,
  fontSize: string
};

const defaultProps = {
  color: 'primary',
  fontSize: '14px',
  width: sizes.button.width,
  height: sizes.button.height
};

const Button = ({ color, width, height, fontSize, children, ...props }) => (
  <ButtonStyles color={color} width={width} height={height} fontSize={fontSize} {...props}>
    {children}
  </ButtonStyles>
);

Button.propTypes = propTypes;
Button.defaultProps = defaultProps;

export default Button;
