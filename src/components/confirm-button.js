import { useTheme } from 'styled-components';
import IconButton from './icon-button';
import CheckIcon from 'preact-icons/md/check';

const ConfirmButton = () =>  {
	const theme = useTheme();

	return (
		<IconButton icon={CheckIcon} color={theme.colors.green} to="/" />
	);
};

export default ConfirmButton;

