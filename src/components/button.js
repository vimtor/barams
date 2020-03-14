import { h } from 'preact';
import styled from 'styled-components';
import Box from './box';

const Button = styled(Box)`
  background-color: ${({ theme }) => theme.colors.white};
  color: ${({ theme }) => theme.colors.gray};
  font-family: ${({ theme }) => theme.fonts.primary};
  transition: all 150ms ease-in-out;

  &:hover {
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.05);
    transform: translateY(-2.5%);
  }
`;

export default Button;
