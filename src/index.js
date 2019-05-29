import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import createSagaMiddleware from 'redux-saga'
import { routerMiddleware, ConnectedRouter, connectRouter } from 'connected-react-router'
import { createStore, applyMiddleware, compose, combineReducers } from 'redux'
import { logger } from 'redux-logger';
import appReducer from './reducers'
import saga from './saga'
import App from './containers/App'
import { createBrowserHistory } from 'history'

let composeEnhancers = compose
if (process.env.NODE_ENV !== 'production' && typeof window === 'object') {
    if (window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) {
      composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
    }
}
const sagaMiddleware = createSagaMiddleware()
const history = createBrowserHistory()
const middlewares = [logger, routerMiddleware(history), sagaMiddleware]
const rootReducer = combineReducers({
    app: appReducer,
    router: connectRouter(history)
})

const store = createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(...middlewares)),
);

sagaMiddleware.run(saga)

render(
    <Provider store={store}>
        <ConnectedRouter history={history}>
            <App />
        </ConnectedRouter>
    </Provider>,
    document.getElementById('root')
);
