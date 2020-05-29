import { combineReducers } from 'redux';
import browserHistory from './browserHistory';
import { connectRouter } from 'connected-react-router';
import appReducer from './App';
import charactersReducer from './Characters';

const rootReducer = combineReducers({
  app: appReducer,
  router: connectRouter(browserHistory),
  characters: charactersReducer
});

export type ApplicationState = ReturnType<typeof rootReducer>;
export default rootReducer;
