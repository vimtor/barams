import { h } from 'preact';
import { createIconButton } from './icon-button';
import { Check } from 'styled-icons/material';

const ConfirmButton = createIconButton(Check, 'green');

export default ConfirmButton;

