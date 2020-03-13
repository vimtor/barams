import { h } from 'preact';
import { createIconButton } from './icon-button';
import { MdCheck } from 'react-icons/md';

const ConfirmButton = createIconButton(MdCheck, 'green');

export default ConfirmButton;

