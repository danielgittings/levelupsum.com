import React from 'react';
import ReactDOM from 'react-dom';
import WebFont from 'webfontloader';

import './normalize.css';
import './index.css';
import App from './App';

import * as serviceWorker from './serviceWorker';

WebFont.load({
  google: {
    families: ['Luckiest Guy:400', 'Open Sans:400'],
  },
});

if (module.hot) {
  module.hot.accept();
}

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.register();
