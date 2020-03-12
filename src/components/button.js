import styled from 'styled-components';
import Box from './box';

const Button = styled(Box)`
  background-color: ${({ theme }) => theme.colors.white};
  font-family: ${({ theme }) => theme.fonts.primary};
  color: ${({ theme }) => theme.colors.gray};
`;

export default Button;
