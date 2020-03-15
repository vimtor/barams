import { h } from 'preact';
import styled from 'styled-components';
import Content from '../components/content';
import Button from '../components/button';
import AddButton from '../components/add-button';
import { useGroups } from '../contexts/groups-context';

const ButtonGrid = styled.div`
	display: grid;
	gap: 8px;
	margin: -10px;
	max-height: 200px;
	overflow-y: scroll;
	padding: 10px;

	&::-webkit-scrollbar {
		display: none;
	}
`;


const Home = () => {
	const { groups } = useGroups();

	return (
		<Content>
			<ButtonGrid empty={groups.length === 0} data-test="group-grid">
				{groups.map(group => (
					<Button key={group.id} {...group}  />
				))}
			</ButtonGrid>
			<AddButton to="/create" data-test="create-button" />
		</Content>
	);
};

export default Home;