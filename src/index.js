import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { HashRouter } from 'react-router-dom';
import thunk from 'redux-thunk';
import {applyMiddleware, compose, createStore} from 'redux';
import {Provider} from 'react-redux'
import rootReducer from './store/reducer'
import registerServiceWorker from './registerServiceWorker';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));

ReactDOM.render(
    <Provider store={store}>
        <HashRouter basename='/'>
            <App />
        </HashRouter>
    </Provider>,
    document.getElementById('root')
);
registerServiceWorker();
