import { createStore, applyMiddleware, compose } from 'redux';
import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';

import reducer from './reducers';

const middleware = [thunk];
const composeEnhancers = compose;

if (process.env.NODE_ENV !== 'production') {
  middleware.push(createLogger());
}
const enhancer = composeEnhancers(
  applyMiddleware(...middleware),
);
const store = createStore(reducer, enhancer);

export default store;
