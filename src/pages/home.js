import { h } from 'preact';
import styled from 'styled-components';
import Content from '../components/content';
import Button from '../components/button';
import AddButton from '../components/add-button';
import { useGroups } from '../contexts/groups-context';

const ButtonGrid = styled.div`
	max-height: 200px;
	display: ${props => props.display ? 'grid' : 'none'};
	gap: 8px;
	overflow-y: scroll;

	&::-webkit-scrollbar {
		display: none;
	}
`;

const Home = () => {
	const { groups } = useGroups();

	return (
		<Content>
			<ButtonGrid display={groups.length !== 0}>
				{groups.map(group => (
					<Button key={group.id}>{group.name}</Button>
				))}
			</ButtonGrid>
			<AddButton to="/create" />
		</Content>
	);
};

export default Home;