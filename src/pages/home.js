import { h } from 'preact';
import styled from 'styled-components';
import Content from '../components/content';
import Button from '../components/button';
import AddButton from '../components/add-button';
import { useGroups } from '../contexts/groups-context';
import useTab from '../hooks/use-tab';

const ButtonGrid = styled.div`
	display: ${props => props.display ? 'grid' : 'none'};
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
	const { setUrl } = useTab();

	const handleClick = params => () => setUrl(params);

	return (
		<Content>
			<ButtonGrid display={groups.length !== 0} data-test="group-grid">
				{groups.map(group => (
					<Button key={group.id} onClick={handleClick(group.params)}>
						{group.name}
					</Button>
				))}
			</ButtonGrid>
			<AddButton to="/create" data-test="create-button" />
		</Content>
	);
};

export default Home;