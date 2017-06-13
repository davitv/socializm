import { applyMiddleware, createStore } from 'redux';

import thunk from 'redux-thunk';
import promise from 'redux-promise';
import createLogger from 'redux-logger';
import rootReducer from './reducers';


const middleware = [thunk, promise];
if (process.env.NODE_ENV !== 'production') {
    middleware.push(createLogger());
}

export default createStore(rootReducer, applyMiddleware(...middleware));
