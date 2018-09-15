import React from 'react';
import ReactDOM from 'react-dom';
import MatkaApp from './MatkaApp';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<MatkaApp />, document.getElementById('root'));
registerServiceWorker();
