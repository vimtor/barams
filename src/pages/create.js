import { useState, useCallback } from 'preact/hooks';
import styled from 'styled-components';
import { route } from 'preact-router';
import Content from '../components/content';
import NameInput from '../components/name-input';
import ConfirmButton from '../components/confirm-button';
import CancelButton from '../components/cancel-button';
import { useGroups } from '../contexts/groups-context';

const Form = styled.form`
	display: grid;
	grid-template-columns: 1fr 1fr;
	gap: 8px;
`;

const Create = () => {
	const [name, setName] = useState('');
	const { dispatch } = useGroups();

	const handleSubmit = useCallback(() => {
		dispatch({ type: 'ADD', payload: { name } });
		route('/', true);
	}, [name]);

	const handleCancel = useCallback(() => route('/', true));

	return (
		<Content>
			<NameInput
				placeholder="Enter your name"
				onChange={setName}
			/>
			<Form>
				<ConfirmButton onClick={handleSubmit} />
				<CancelButton onClick={handleCancel} />
			</Form>
		</Content>
	);
};

export default Create;