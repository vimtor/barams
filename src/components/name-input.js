import { h } from 'preact';
import { useState, useCallback, useRef } from 'preact/hooks';
import styled from 'styled-components';
import Box from './box';
import Label from './label';

const InputButton = styled(Box)`
	background: ${({ theme }) => theme.colors.white};
  cursor: text;
  display: flex;
  flex-direction: column;
  font-family: ${({ theme }) => theme.fonts.primary};
`;

const Input = styled.input`
  background: transparent;
  border: 0;
  color: ${({ theme }) => theme.colors.gray};
  font-family: ${({ theme }) => theme.fonts.primary};
  font-size: 24px;
  text-overflow: ellipsis;
  width: 100%;

  &:focus {
    outline: none;
  }

  &::placeholder {
    color: ${({ theme }) => theme.colors.light};
  }
`;

const NameInput = ({ placeholder, onChange }) => {
	const [value, setValue] = useState('');
	const inputRef = useRef(null);
	const [focused, setFocused] = useState(false);

	const handleChange = useCallback(e =>  {
		setValue(e.target.value);
		onChange(e.target.value);
	}, []);

	const handleFocus = useCallback(() => setFocused(true), []);
	const handleClick = useCallback(() => inputRef.current.focus(), [inputRef]);
	const handleBlur = useCallback(() => setFocused(value), [value]);

	return (
		<InputButton tabIndex={-1} onClick={handleClick}>
			<Label active={focused}>{placeholder}</Label>
			<Input
				type="text"
				placeholder={focused ? '' : placeholder}
				value={value}
				onFocus={handleFocus}
				onBlur={handleBlur}
				onChange={handleChange}
				data-test="name-input"
				autoComplete="off"
				ref={inputRef}
			/>
		</InputButton>
	);
};

export default NameInput;