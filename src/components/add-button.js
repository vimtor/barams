import { h } from 'preact';
import { createIconButton } from './icon-button';
import { Add } from 'styled-icons/material';

const AddButton = createIconButton(Add, 'green');

export default AddButton;

