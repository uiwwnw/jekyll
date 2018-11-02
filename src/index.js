import './style.scss';
import './fontello/css/fontello.css';
import React from 'react';
import {render} from 'react-dom';
import App from './components/App';
import queryString from 'query-string';
console.log(queryString);

render(<App />, document.getElementById('root'));
