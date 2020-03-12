import { useTheme } from 'styled-components';
import IconButton from './icon-button';
import AddIcon from 'preact-icons/md/add';

const AddButton = () =>  {
	const theme = useTheme();

	return (
		<IconButton icon={AddIcon} color={theme.colors.green} />
	);
};

export default AddButton;

