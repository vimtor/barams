import { h } from 'preact';
import styled from 'styled-components';
import Box from './box';

const Button = styled(Box)`
  background-color: ${({ theme }) => theme.colors.white};
  color: ${({ theme }) => theme.colors.gray};
  font-family: ${({ theme }) => theme.fonts.primary};
  font-size: 24px;
  transition: all 150ms ease-in-out;

  &:hover {
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.04);
    transform: translateY(-2%);
  }
`;

export default Button;
