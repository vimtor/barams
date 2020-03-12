import styled from 'styled-components';
import BaseButton from './base-button';

const Button = styled(BaseButton)`
  background-color: ${({ theme }) => theme.colors.white};
  color: ${({ theme }) => theme.colors.gray};
`;

export default Button;
