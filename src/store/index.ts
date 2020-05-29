import { applyMiddleware, createStore } from 'redux';
import rootReducer from './rootReducer';
import { routerMiddleware } from 'connected-react-router';
import browserHistory from './browserHistory';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

const middleware = [routerMiddleware(browserHistory), thunk];

const store = createStore(
  rootReducer,
  process.env.NODE_ENV === 'development'
    ? composeWithDevTools(applyMiddleware(...middleware))
    : applyMiddleware(...middleware)
);

if (process.env.NODE_ENV === 'development' && module.hot) {
  module.hot.accept('./rootReducer', () => {
    const newRootReducer = require('./rootReducer').default;
    store.replaceReducer(newRootReducer);
  });
}

export default store;
