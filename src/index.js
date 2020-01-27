import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Data from './store';
import './index.css';

ReactDOM.render(<App store={Data} />, document.getElementById('root'));
