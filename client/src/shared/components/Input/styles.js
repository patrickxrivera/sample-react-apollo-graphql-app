import styled from 'styled-components';
import colors from 'shared/styles/colors';

export default styled.input`
  box-sizing: border-box;
  display: block;
  width: 100%;
  height: 40px;
  margin-top: 14px;
  padding: 6px 14px;
  padding-left: 8px;
  font-size: 16px;
  border: ${({ showErrorStyles }) => (showErrorStyles ? '2px solid #dc3545' : '2px solid #e9ebeb')};
  border-radius: 4px;
  background: 0 0;

  &:focus {
    outline: 0;
    border: ${({ showErrorStyles }) =>
      showErrorStyles ? '2px solid #dc3545' : `2px solid ${colors.primary}`};
    box-shadow: ${({ showErrorStyles }) =>
      showErrorStyles ? '0 0 0 0.2rem rgba(220,53,69,.25)' : `0 0 1px 0 ${colors.primary}`};
  }
`;
