import { h } from 'preact';
import styled, { useTheme } from 'styled-components';
import { Github } from 'styled-icons/boxicons-logos';
import { Settings } from 'styled-icons/material';

const NavWrapper = styled.nav`
  align-items: center;
  background-color: white;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  padding: 16px 24px;
`;

const NavTitle = styled.h1`
	color: ${({ theme }) => theme.colors.black};
	font-family: ${({ theme }) => theme.fonts.primary};
	font-size: 18px;
  line-height: 0;
  margin: 0px;
`;

const NavLinks = styled.div`
  display: grid;
  gap: 4px;
  grid-template-columns: 1fr 1fr;
`;

const NavLink = ({ icon, to }) => {
	const theme = useTheme();
	const Icon = icon;

	return (
		<a href={to}>
			<Icon size={16} color={theme.colors.gray} />
		</a>
	);
};

const NavBar = () => (
	<NavWrapper>
		<NavTitle>
      barams
		</NavTitle>
		<NavLinks>
			<NavLink icon={Github} to="https://github.com/papeloto/barams" />
			<NavLink icon={Settings} />
		</NavLinks>
	</NavWrapper>
);

export default NavBar;