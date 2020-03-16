import { h } from 'preact';
import { useCallback, useState } from 'preact/hooks';
import styled, { useTheme, keyframes } from 'styled-components';
import { Close } from 'styled-icons/material';
import Box from './box';
import setParams from '../utils/set-params';
import { useGroups } from '../contexts/groups-context';

const RemoveButton = styled.button`
  align-items: center;
  background: none;
  border: none;
  border-radius: 100%;
  cursor: pointer;
  display: flex;
  height: 32px;
  justify-content: center;
  margin: 0;
  opacity: 0;
  transition: opacity 0.6s ease-in-out, background-color 150ms ease-in-out;
  width: 32px;

  &:hover {
    background-color: ${({ theme }) => theme.colors.red};
  }

  &:hover svg {
    fill: ${({ theme }) => theme.colors.white};
  }
`;

const fadeOut = keyframes`
  0% {
    opacity: 1;
    display: flex;
    max-height: 100px;
    padding: 16px 12px;
  }
  75% {
    opacity: 0;
  }
  99% {
    position: unset;
  }
  100% {
    position: fixed;
    opacity: 0;
    padding: 0 12px;
    display: none;
    border: 0;
    max-height: 0px;
  }
`;

const StyledGroup = styled(Box)`
  align-items: center;
  animation: ${props => props.removed ? fadeOut : null} 150ms ease-in-out forwards;
  background-color: ${({ theme }) => theme.colors.white};
  color: ${({ theme }) => theme.colors.gray};
  display: flex;
  font-family: ${({ theme }) => theme.fonts.primary};
  font-size: 24px;
  justify-content: space-between;
  transition: all 150ms ease-in-out;

  &:hover {
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.04);
    transform: translateY(-2%);
  }

  &:hover ${RemoveButton} {
    opacity: 1;
  }
`;

const Group = ({ id, params, name }) => {
	const theme = useTheme();
	const { dispatch } = useGroups();
	const [removed, setRemoved] = useState(false);

	const handleClick = useCallback(() => setParams(params), [params]);
  
	const handleRemove = useCallback(e => {
		e.stopPropagation();
		setRemoved(true);
		setTimeout(() => dispatch({ type: 'DELETE', payload: id }), 1000);
	}, [dispatch, id, removed, setRemoved]);

	return (
		<StyledGroup onClick={handleClick} removed={removed}>
			{name}
			<RemoveButton
				onClick={handleRemove}
				data-test="delete-group-button"
			>
				<Close size={24} color={theme.colors.light} />
			</RemoveButton>
		</StyledGroup>
	);
};

export default Group;