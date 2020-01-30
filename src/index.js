import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import { HashRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import "./index.css";
import store from './store';
import App from './App';

ReactDOM.render(
    <HashRouter>
        <Fragment>
            <Provider store={store}>
                <App />
            </Provider>
        </Fragment>
    </HashRouter>,
    document.getElementById('root')
);
