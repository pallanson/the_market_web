import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import rootReducer from './reducers'
import App from './App'
import Categories from "./components/Categories";
import Index from './components/Index';

const store = createStore(rootReducer);

render(
    <Provider store={store}>
        <App />
        <Index/>
    </Provider>,
    document.getElementById('root')
);
