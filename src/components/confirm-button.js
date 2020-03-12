import { useTheme } from 'styled-components';
import CheckIcon from 'preact-icons/md/check';
import IconButton from './icon-button';

const ConfirmButton = ({ onClick }) =>  {
	const theme = useTheme();

	return (
		<IconButton
			icon={CheckIcon}
			color={theme.colors.green}
			onClick={onClick}
		/>
	);
};

export default ConfirmButton;

