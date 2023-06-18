import {createStore, applyMiddleware, compose} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import rootReducer from './reducers';

const intailState = {};
const middleware = [thunk];

const Store = createStore(
    rootReducer,
    intailState,
    composeWithDevTools(applyMiddleware(...middleware))
)

export default Store;