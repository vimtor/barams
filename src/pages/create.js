import { useState, useCallback } from 'preact/hooks';
import { route } from 'preact-router';
import Content from '../components/content';
import NameInput from '../components/name-input';
import ConfirmButton from '../components/confirm-button';
import { useGroups } from '../contexts/groups-context';

const Create = () => {
	const [name, setName] = useState('');
	const { dispatch } = useGroups();

	const handleSubmit = useCallback(() => {
		dispatch({ type: 'ADD', payload: { name } });
		route('/', true);
	}, [name]);

	return (
		<Content>
			<NameInput
				placeholder="Enter your name"
				onChange={setName}
			/>
			<ConfirmButton onClick={handleSubmit} />
		</Content>
	);
};

export default Create;