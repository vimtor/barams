import { h, render } from 'preact';
import App from './app';

import './style.css';

const mountNode = document.getElementById('app');
render(<App />, mountNode, mountNode.lastChild);