import { h } from 'preact';
import Content from '../components/content';
import Button from '../components/button';
import AddButton from '../components/add-button';
import { useGroups } from '../contexts/groups-context';

const Home = () => {
	const { groups } = useGroups();

	return (
		<Content>
			{groups.map(group => (
				<Button key={group.id}>{group.name}</Button>
			))}
			<AddButton to="/create" />
		</Content>
	);
};

export default Home;