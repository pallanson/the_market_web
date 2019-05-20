import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { routerMiddleware, ConnectedRouter, connectRouter } from 'connected-react-router'
import { createStore, applyMiddleware, compose, combineReducers } from 'redux'
import { logger } from 'redux-logger';
import appReducer from './reducers'
import App from './containers/App'
import { createBrowserHistory } from 'history'

let composeEnhancers = compose
if (process.env.NODE_ENV !== 'production' && typeof window === 'object') {
    if (window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) {
      composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
    }
}
const history = createBrowserHistory()
const middlewares = [logger, routerMiddleware(history)]
const rootReducer = combineReducers({
    app: appReducer,
    router: connectRouter(history)
})

const store = createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(...middlewares)),
);

render(
    <Provider store={store}>
        <ConnectedRouter history={history}>
            <App />
        </ConnectedRouter>
    </Provider>,
    document.getElementById('root')
);
