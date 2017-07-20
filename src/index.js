import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

import './styles/main.css'
import App from './containers/App';
import configureStore from './store/configureStore';

const store = configureStore();

render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);