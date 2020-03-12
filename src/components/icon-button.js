import styled, { useTheme } from 'styled-components';
import BaseButton from './base-button';

const StyledIconButton = styled(BaseButton)`
	border: ${({ theme }) => `2px solid ${theme.colors.light}`};
	background: none;
  display: flex;
  justify-content: center;
	align-items: center;
	transition: background 150ms ease-in-out;
	
	&:hover {
		background-color: ${props => props.color};
	}

	&:hover svg {
		fill: ${({ theme }) => theme.colors.white};
	}
`;

const IconButton = ({ icon, color }) => {
	const theme = useTheme();
	const Icon = icon;

	return (
		<StyledIconButton color={color}>
			<Icon size={16} color={theme.colors.light} />
		</StyledIconButton>
	);
};

export default IconButton;


