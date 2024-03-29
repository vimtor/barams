import { h } from 'preact';
import styled from 'styled-components';
import Content from '../components/content';
import Group from '../components/group';
import { AddButton } from '../components/icon-button';
import { useGroups } from '../contexts/groups-context';

const GroupGrid = styled.div`
	display: grid;
	gap: 8px;
	margin: -10px;
	margin-bottom: 4px;
	max-height: 250px;
	overflow-y: scroll;
	padding: 10px;
	padding-bottom: 0px;
	position: relative;

	&::-webkit-scrollbar {
		display: none;
	}
`;

const Home = () => {
	const { groups } = useGroups();

	return (
		<Content>
			<GroupGrid
				empty={groups.length === 0}
				data-test="group-grid"
			>
				{groups.map(props => (
					<Group key={props.id} {...props}  />
				))}
			</GroupGrid>
			<AddButton to="/create" data-test="create-button" />
		</Content>
	);
};

export default Home;