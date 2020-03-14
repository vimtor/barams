import { h } from 'preact';
import { useCallback } from 'preact/hooks';
import styled, { useTheme } from 'styled-components';
import Box from './box';

const StyledIconButton = styled(Box)`
	border: ${({ theme }) => `2px solid ${theme.colors.light}`};
	background: none;
  display: flex;
  justify-content: center;
	align-items: center;
	box-shadow: none;
	cursor: ${props => props.disabled ? 'default' : 'pointer'};
	transition: all 150ms ease-in-out;
	
	&:hover {
		background-color: ${props => !props.disabled && props.color};
		border-color: ${props => !props.disabled && props.color};
	}

	&:hover svg {
		fill: ${props => !props.disabled && props.theme.colors.white};
	}
`;

const IconButton = ({ icon, disabled, color, to, onClick, ...props }) => {
	const theme = useTheme();
	const Icon = icon;

	const handleSubmit = useCallback(value => {
		if (!disabled && onClick) {
			onClick(value);
		}
	}, [disabled, onClick]);

	return (
		<StyledIconButton
			disabled={disabled}
			color={theme.colors[color] || color}
			onClick={handleSubmit}
			href={to}
			{...props}
		>
			<Icon size={24} color={theme.colors.light} />
		</StyledIconButton>
	);
};

export const createIconButton = (icon, color) => props => <IconButton icon={icon} color={color} {...props} />;

export default IconButton;


