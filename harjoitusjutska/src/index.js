import React from 'react';
import ReactDOM from 'react-dom';
import KappaleApp from './KappaleApp';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<KappaleApp />, document.getElementById('root'));
registerServiceWorker();
