import { applyMiddleware, combineReducers, createStore } from 'redux'
import pages from './pages'
import thunk from 'redux-thunk'
import links from './links'

const rootReducers = combineReducers({
  pages: pages,
  links: links,
})

const store = createStore(rootReducers, applyMiddleware(thunk));

export default store;