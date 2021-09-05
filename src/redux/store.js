import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger/src';
import {auth} from "./auth";
import { profile } from './profile'
import { rating } from './rating'

const logger = createLogger({
  diff: true,
  collapsed: true,
});

const rootReducer = combineReducers({
  auth: auth,
  profile: profile,
  rating: rating
});

const store = createStore(rootReducer, applyMiddleware(thunk, logger));

export default store;