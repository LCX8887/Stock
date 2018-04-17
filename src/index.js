import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Stock from './Stock/Stock';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Stock />, document.getElementById('root'));
registerServiceWorker();
