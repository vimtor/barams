import Content from '../components/content';
import NameButton from '../components/name-button';
import ConfirmButton from '../components/confirm-button';

const Create = () => (
	<Content>
		<NameButton placeholder="Enter your name" />
		<ConfirmButton />
	</Content>
);

export default Create;