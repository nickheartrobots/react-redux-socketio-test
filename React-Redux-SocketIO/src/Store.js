import { createStore, applyMiddleware } from 'redux';
import Reducers from './Reducers';
import initialState from './initialState';

import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';

export default createStore(Reducers, initialState, applyMiddleware(thunk, createLogger()));