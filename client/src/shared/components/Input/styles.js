import styled from 'styled-components';
import colors from 'shared/styles/colors';

export default styled.input`
  box-sizing: border-box;
  display: block;
  width: 100%;
  height: 40px;
  margin-top: 18px;
  padding: 6px 14px;
  padding-left: 8px;
  font-size: 16px;
  border: 2px solid #e9ebeb;
  border-radius: 4px;
  background: 0 0;
  &:focus {
    outline: 0;
    border-color: ${colors.primary};
    box-shadow: 0 0 1px 0 ${colors.primary};
  }
`;
