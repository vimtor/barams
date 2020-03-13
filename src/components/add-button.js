import { h } from 'preact';
import { createIconButton } from './icon-button';
import { MdAdd } from 'react-icons/md';

const AddButton = createIconButton(MdAdd, 'green');

export default AddButton;

