import styled, { ThemeProvider } from 'styled-components';
import NavBar from './components/NavBar';

const AppWrapper = styled.main`
  width: 300px;
  height: auto;
`;

const App = () => (
	<ThemeProvider theme={{ colors: { black: '#515151', gray: '#5E6368' } }}>
		<AppWrapper>
			<NavBar />
		</AppWrapper>
	</ThemeProvider>
);

export default App;
