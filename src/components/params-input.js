import { h } from 'preact';
import { useState } from 'preact/hooks';
import styled, { keyframes } from 'styled-components';
import Box from './box';
import Label from './label';

const ParamsBox = styled(Box)`
  background: ${({ theme }) => theme.colors.white};
  display: flex;
  flex-direction: column;
  font-family: ${({ theme }) => theme.fonts.primary};
`;

const Input = styled.input`
  background: transparent;
  border: 0;
  color: ${({ theme }) => theme.colors.gray};
  font-size: 14px;
  text-overflow: ellipsis;
  width: 100%;

  &:focus {
    outline: none;
  }

  &::placeholder {
    color: ${({ theme }) => theme.colors.light};
  }
`;

const fadeIn = keyframes`
	0% {
		opacity: 0;
		height: 0;
	}
	100% {
		opacity: 1;
		height: 14px;
	}
`;

const ParamsRow = styled.div`
  animation: ${fadeIn} 150ms ease-in-out forwards;
  display: grid;
  gap: 8px;
	grid-template-columns: 1fr 1fr;
`;

const ParamsGrid = styled.div`
  display: grid;
  gap: 8px;
`;

const EMPTY_PARAM = { name: '', value: '' };

const ParamsInput = ({ placeholder, onChange }) => {
	const [params, setParams] = useState([EMPTY_PARAM]);

	const handleChange = index => e => {
		const paramsCopy = JSON.parse(JSON.stringify(params));
		paramsCopy[index][e.target.name] = e.target.value;

		const isEmpty = param => param.name === '' && param.value === '';

		const empty = paramsCopy.reduce((acc, x) => acc + isEmpty(x), 0);

		let result;

		if (empty === 0) {
		  result = [...paramsCopy, EMPTY_PARAM];
		}
		else if (empty > 1) {
			let once = true;
			result = paramsCopy.filter(x => {
				if (isEmpty(x) && once) {
					once = false;
					return false;
				}

				return true;
			});
		}
		else {
		  result = paramsCopy;
		}

		setParams(result);
		onChange(result.filter(x => !isEmpty(x)));
	};
  

	return (
		<ParamsBox>
			<Label active>{placeholder}</Label>
			<ParamsGrid>
				{params.map((param, idx) => (
					<ParamsRow key={idx}>
						<Input
							placeholder="Name"
							onInput={handleChange(idx)}
							name="name"
							autoComplete="off"
							data-test={`param-name-input-${idx}`}
						/>
						<Input
							placeholder="Value"
							onInput={handleChange(idx)}
							name="value"
							autoComplete="off"
							data-test={`param-value-input-${idx}`}
						/>
					</ParamsRow>
				))}
			</ParamsGrid>
		</ParamsBox>
	);
};

export default ParamsInput;