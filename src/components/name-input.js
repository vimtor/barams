import { h } from 'preact';
import { useState, useCallback } from 'preact/hooks';
import styled from 'styled-components';
import Box from './box';
import Label from './label';

const InputButton = styled(Box)`
  font-family: ${({ theme }) => theme.fonts.primary};
  background: ${({ theme }) => theme.colors.white};
  display: flex;
  flex-direction: column;
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

const NameInput = ({ placeholder, onChange }) => {
	const [value, setValue] = useState('');
	const [focused, setFocused] = useState(false);

	const handleChange = useCallback(e =>  {
		setValue(e.target.value);
		onChange(e.target.value);
	}, []);

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

export default NameInput;