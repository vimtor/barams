import { h } from 'preact';
import { createIconButton } from './icon-button';
import { MdBlock } from 'react-icons/md';

const CancelButton = createIconButton(MdBlock, 'red');

export default CancelButton;