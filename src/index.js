import React from 'react';
import ReactDOM from 'react-dom';

import registerServiceWorker from './registerServiceWorker';

import 'b:Page';
import App from 'b:App';

import news from './data';


ReactDOM.render(<App news={ news } />, document.getElementById('root'));
registerServiceWorker();
