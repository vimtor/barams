import styled from 'styled-components';

const BaseButton = styled.button`
  box-sizing: border-box;
  padding: 16px 12px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.03);
  border-radius: 8px;
  border: ${({ theme }) => `1px solid ${theme.colors.light}`};
  cursor: pointer;
`;

export default BaseButton;
