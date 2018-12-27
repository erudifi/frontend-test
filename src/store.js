import { createStore, applyMiddleware } from 'redux';
import logger  from 'redux-logger';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import reducers from './reducers/rootReducer';

const middleware = [
	thunk,
	logger
];

export default createStore(
		reducers,
		composeWithDevTools(
			applyMiddleware(...middleware)
		)
);