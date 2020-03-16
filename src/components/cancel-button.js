import { h } from 'preact';
import { createIconButton } from './icon-button';
import { Block } from 'styled-icons/material';

const CancelButton = createIconButton(Block, 'red');

export default CancelButton;