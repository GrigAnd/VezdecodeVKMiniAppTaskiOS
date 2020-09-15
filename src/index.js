import 'core-js/es6/map';
import 'core-js/es6/set';
import React from 'react';
import ReactDOM from 'react-dom';
import bridge from '@vkontakte/vk-bridge';
import App from './App';
window.history.pushState(null, null, window.location.pathname);
bridge.send('VKWebAppInit', {});

ReactDOM.render(<App />, document.getElementById('root'));
