import { useState, useCallback } from 'preact/hooks';
import styled, { keyframes } from 'styled-components';
import BaseButton from './base-button';

const InputButton = styled(BaseButton)`
  font-family: ${({ theme }) => theme.fonts.primary};
  background: ${({ theme }) => theme.colors.white};
  display: flex;
  flex-direction: column;
`;

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
  animation: ${props => props.active ? fadeIn : fadeOut} 100ms ease-in-out forwards;
`;

const Input = styled.input`
  font-size: 20px;
  width: 100%;
  border: 0;
  background: transparent;
  color: ${({ theme }) => theme.colors.gray};
  text-overflow: ellipsis;

  &:focus {
    outline: none;
  }

  &::placeholder {
    color: ${({ theme }) => theme.colors.light};
  }
`;

const NameButton = ({ placeholder }) => {
	// const theme = useTheme();
	const [value, setValue] = useState('');
	const [focused, setFocused] = useState(false);

	const handleChange = useCallback(e => setValue(e.target.value), []);
	const handleFocus = useCallback(() => setFocused(true), []);
	const handleBlur = useCallback(() => setFocused(value), [value]);

	return (
		<InputButton>
			<Label active={focused}>{placeholder}</Label>
			<Input
				type="text"
				placeholder={focused ? '' : placeholder}
				value={value}
				onFocus={handleFocus}
				onBlur={handleBlur}
				onChange={handleChange}
			/>
		</InputButton>
	);
};

export default NameButton;