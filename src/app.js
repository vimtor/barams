import { h } from 'preact';
import Router from 'preact-router';
import styled, { ThemeProvider } from 'styled-components';
import GroupProvider from './contexts/groups-context';
import NavBar from './components/nav-bar';
import Home from './pages/home';
import Create from './pages/create';
import { createHashHistory } from 'history';

import './style.css';

const theme = {
	colors: {
		black: '#515151',
		gray: '#5e6368',
		peanut: '#c6c6c6',
		light: '#eaeaea',
		white: '#fff',
		green: '#2Ecc71',
		red: '#e74c3C',
	},
	fonts: {
		primary: 'Inter',
	},
};

const StyledApp = styled.main`
  height: auto;
  width: 350px;
`;

const App = () => (
	<ThemeProvider theme={theme}>
		<GroupProvider>
			<StyledApp>
				<NavBar />
				<Router history={createHashHistory()}>
					<Home path="/" />
					<Create path="/create" />
				</Router>
			</StyledApp>
		</GroupProvider>
	</ThemeProvider>
);

export default App;