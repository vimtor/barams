import { h } from 'preact';
import styled, { useTheme } from 'styled-components';
import { IoLogoGithub } from 'react-icons/io';
import { MdSettings } from 'react-icons/md';

const NavWrapper = styled.nav`
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px 24px;
  background-color: white;
`;

const NavTitle = styled.h1`
	font-size: 18px;
	font-family: ${({ theme }) => theme.fonts.primary};
	line-height: 0;
  margin: 0px;
  color: ${({ theme }) => theme.colors.black}
`;

const NavLinks = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4px;
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
			<NavLink icon={IoLogoGithub} to="https://github.com/papeloto/barams" />
			<NavLink icon={MdSettings} />
		</NavLinks>
	</NavWrapper>
);

export default NavBar;