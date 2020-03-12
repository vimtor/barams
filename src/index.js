import styled, { ThemeProvider } from 'styled-components';
import NavBar from './components/nav-bar';
import Content from './components/content';
import Button from './components/button';
import AddButton from './components/add-button';

const StyledApp = styled.main`
  width: 300px;
  height: auto;
`;

const App = () => (
	<ThemeProvider theme={{
		colors: {
			black: '#515151',
			gray: '#5E6368',
			light: '#eaeaea',
			white: '#fff',
			green: '#2ECC71'
		}
	}}
	>
		<StyledApp>
			<NavBar />
			<Content>
				<Button>GitHub Issue</Button>
				<Button>GitHub Issue</Button>
				<AddButton />
			</Content>
		</StyledApp>
	</ThemeProvider>
);

export default App;
