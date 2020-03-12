import styled, { useTheme } from 'styled-components';
import Box from './box';

const StyledIconButton = styled(Box)`
	border: ${({ theme }) => `2px solid ${theme.colors.light}`};
	background: none;
  display: flex;
  justify-content: center;
	align-items: center;
	box-shadow: none;
	transition: all 150ms ease-in-out;
	
	&:hover {
		background-color: ${props => props.color};
		border-color: ${props => props.color};
	}

	&:hover svg {
		fill: ${({ theme }) => theme.colors.white};
	}
`;

const IconButton = ({ icon, color, to, onClick }) => {
	const theme = useTheme();
	const Icon = icon;

	return (
		<StyledIconButton color={theme.colors[color] || color} onClick={onClick} href={to}>
			<Icon size={24} color={theme.colors.light} />
		</StyledIconButton>
	);
};

export const createIconButton = (icon, color) => props => <IconButton icon={icon} color={color} {...props} />;

export default IconButton;


