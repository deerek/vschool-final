import { combineReducers, createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

import aContent from "./aContent";
import bContent from "./bContent";
import auth from "./auth";

const reducer = combineReducers({
    aContent,
    bContent,
    auth
});

export default createStore(
    reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
    applyMiddleware(thunk)
);