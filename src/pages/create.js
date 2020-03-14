import { h } from 'preact';
import { useState, useCallback } from 'preact/hooks';
import styled from 'styled-components';
import { route } from 'preact-router';
import Content from '../components/content';
import NameInput from '../components/name-input';
import ConfirmButton from '../components/confirm-button';
import CancelButton from '../components/cancel-button';
import { useGroups } from '../contexts/groups-context';
import ParamsInput from '../components/params-input';

const Form = styled.form`
	display: grid;
	grid-template-columns: 1fr 1fr;
	gap: 8px;
`;

const Create = () => {
	const [name, setName] = useState('');
	const [params, setParams] = useState([]);
	const { dispatch } = useGroups();

	const handleSubmit = useCallback(() => {
		dispatch({ type: 'ADD', payload: { name, params } });
		route('/', true);
	}, [name, params, dispatch]);

	const handleCancel = useCallback(() => route('/', true), []);

	return (
		<Content>
			<NameInput
				placeholder="Enter your name"
				onChange={setName}
			/>
			<ParamsInput
				placeholder="Parameters"
				onChange={setParams}
			/>
			<Form>
				<ConfirmButton
					disabled={!name}
					onClick={handleSubmit}
					data-test="confirm-button"
				/>
				<CancelButton
					onClick={handleCancel}
					data-test="cancel-button"
				/>
			</Form>
		</Content>
	);
};

export default Create;
