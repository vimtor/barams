import styled from 'styled-components';
import BaseButton from './base-button';

const Button = styled(BaseButton)`
  background-color: ${({ theme }) => theme.colors.white};
  font-family: ${({ theme }) => theme.fonts.primary};
  color: ${({ theme }) => theme.colors.gray};
`;

export default Button;
