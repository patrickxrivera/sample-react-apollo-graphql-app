import styled from 'styled-components';
import { animations, colors } from 'shared/styles';

const ButtonStyles = styled.button`
  background-color: ${({ color }) => (color === 'primary' ? colors.primary : colors.white)};
  border: 2px solid ${colors.primary}
  color: ${({ color }) => (color === 'primary' ? colors.white : colors.primary)};
  text-transform: uppercase;
  font-size: ${({ fontSize }) => fontSize}
  letter-spacing: 1px;
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  border-radius: 5px;
  font-weight: bold;
  margin-top: ${({ marginTop }) => marginTop}

  &:hover {
    background-color: ${({ color }) =>
      color === 'primary' ? colors.hover.primary : colors.hover.secondary};
    border: 2px solid ${colors.hover.primary};
    transition: ${animations.hoverTransition};
    cursor: pointer;
  }

  &:focus {
    outline: none;
  }
`;

export default ButtonStyles;
