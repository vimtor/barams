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
  animation: ${props => props.active ? fadeIn : fadeOut} 100ms ease-in-out forwards;
  color: ${({ theme }) => theme.colors.peanut};
  font-size: 12px;
  height: 0;
  margin-bottom: 12px;
  opacity: 0;
`;

export default Label;