import { h } from 'preact';
import styled, { keyframes } from 'styled-components';

const fadeIn = keyframes`
  0% {
    opacity: 0;
    height: 0px;
  }
  100% {
    opacity: 1;
    height: 10px;
  }
`;

const fadeOut = keyframes`
  0% {
    opacity: 1;
    height: 10px;
  }
  100% {
    opacity: 0;
    height: 0px;
    margin-bottom: 0;
  }
`;

const Label = styled.label`
  font-size: 10px;
  color: ${({ theme }) => theme.colors.light};
  margin-bottom: 8px;
  height: 0;
  opacity: 0;
  animation: ${props => props.active ? fadeIn : fadeOut} 100ms ease-in-out forwards;
`;

export default Label;