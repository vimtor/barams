import { useTheme } from 'styled-components';
import CancelIcon from 'preact-icons/md/block';
import IconButton from './icon-button';

const CancelButton = ({ onClick }) =>  {
	const theme = useTheme();

	return (
		<IconButton
			icon={CancelIcon}
			color={theme.colors.red}
			onClick={onClick}
		/>
	);
};

export default CancelButton;

