/**
 * 珠峰培训 http://www.zhufengpeixun.cn
 */
import reducers from './reducers';
import {createStore} from 'redux';
import thunk from 'redux-thunk';
import promise from 'redux-promise';
import {routerMiddleware} from 'react-router-redux';
import createHistory  from 'history/createBrowserHistory';
import {applyMiddleware} from 'redux';
let router = routerMiddleware(createHistory());
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
let store = createStore(reducers,composeEnhancers(applyMiddleware(thunk,promise,router)));
window._store = store;
export default store;