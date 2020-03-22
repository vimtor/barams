import { h } from 'preact';
import { useEffect, useState, useCallback } from 'preact/hooks';
import styled from 'styled-components';
import { route } from 'preact-router';
import Content from '../components/content';
import NameInput from '../components/name-input';
import { ConfirmButton, CancelButton } from '../components/icon-button';
import { useGroups } from '../contexts/groups-context';
import ParamsInput from '../components/params-input';

const Form = styled.form`
	display: grid;
	gap: 8px;
	grid-template-columns: 1fr 1fr;
`;

const Create = () => {
	const [name, setName] = useState('');
	const [params, setParams] = useState([]);
	const { dispatch } = useGroups();

	const handleSubmit = useCallback(() => {
		dispatch({ type: 'CREATE', payload: { name, params } });
		route('/', true);
	}, [name, params, dispatch]);

	const handleUserKeyPress = useCallback(e => {
		if (e.key === 'Escape') {
			route('/', true);
		}
	}, []);

	useEffect(() => {
		window.addEventListener('keydown', handleUserKeyPress);

		return () => {
			window.removeEventListener('keydown', handleUserKeyPress);
		};
	}, [handleUserKeyPress]);

	return (
		<Content>
			<NameInput
				placeholder="Template name"
				onChange={setName}
			/>
			<ParamsInput
				placeholder="Parameters"
				onChange={setParams}
			/>
			<Form>
				<ConfirmButton
					disabled={!name || !params}
					onClick={handleSubmit}
					data-test="confirm-button"
				/>
				<CancelButton data-test="cancel-button" to="/" />
			</Form>
		</Content>
	);
};

export default Create;
