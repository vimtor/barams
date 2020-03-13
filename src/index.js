import { h, render } from 'preact';
import App from './app';

const mountNode = document.getElementById('app');
render(<App />, mountNode, mountNode.lastChild);