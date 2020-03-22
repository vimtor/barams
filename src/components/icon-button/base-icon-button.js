import { h } from 'preact';
import { route } from 'preact-router';
import { useCallback } from 'preact/hooks';
import styled, { useTheme } from 'styled-components';
import Box from '../box';

const StyledIconButton = styled(Box)`
	align-items: center;
	background: none;
  border: ${({ theme }) => `2px solid ${theme.colors.light}`};
  box-shadow: none;
	cursor: ${props => props.disabled ? 'default' : 'pointer'};
	display: flex;
	justify-content: center;
	transition: all 150ms ease-in-out;
	
	&:hover, &:focus {
		background-color: ${props => !props.disabled && props.color};
		border-color: ${props => !props.disabled && props.color};
	}

	&:hover svg,
	&:focus svg {
		fill: ${props => !props.disabled && props.theme.colors.white};
	}
`;

const IconButton = ({ icon, disabled, color, to, onClick, ...props }) => {
	const theme = useTheme();
	const Icon = icon;

	const handleSubmit = useCallback(value => {
		if (!disabled) {
			onClick && onClick(value);
			to && route(to, true);
		}
	}, [disabled, onClick]);

	return (
		<StyledIconButton
			disabled={disabled}
			color={theme.colors[color] || color}
			onClick={handleSubmit}
			{...props}
		>
			<Icon size={24} color={theme.colors.light} />
		</StyledIconButton>
	);
};

export const createIconButton = (icon, color) => props => <IconButton icon={icon} color={color} {...props} />;

export default IconButton;


