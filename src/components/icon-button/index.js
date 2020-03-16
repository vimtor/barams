import { h } from 'preact';
import { createIconButton } from './base-icon-button';
import { Add, Check, Block } from 'styled-icons/material';

export const CancelButton = createIconButton(Block, 'red');
export const ConfirmButton = createIconButton(Check, 'green');
export const AddButton = createIconButton(Add, 'green');

