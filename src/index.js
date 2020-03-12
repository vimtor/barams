import Router from 'preact-router';
import styled, { ThemeProvider } from 'styled-components';
import NavBar from './components/nav-bar';
import Home from './pages/home';
import Create from './pages/create';

import './style.css';

const theme = {
	colors: {
		black: '#515151',
		gray: '#5E6368',
		light: '#eaeaea',
		white: '#fff',
		green: '#2ECC71'
	},
	fonts: {
		primary: 'Inter'
	}
};

const StyledApp = styled.main`
  width: 300px;
  height: auto;
`;

const App = () => (
	<ThemeProvider theme={theme}>
		<StyledApp>
			<NavBar />
			<Router>
				<Home path="/" />
				<Create path="/create" />
			</Router>
		</StyledApp>
	</ThemeProvider>
);

export default App;
