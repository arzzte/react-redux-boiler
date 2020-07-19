import { createStore, applyMiddleware, combineReducers } from 'redux';
import { createLogger } from 'redux-logger';
import { createEpicMiddleware } from 'redux-observable';

import { rootEpic } from './epics';

// Reducers
import * as reducers from './modules';

export const initialState = {};
export default (initialState = {}) => {
  const epicMiddleware = createEpicMiddleware();
  const reducer = combineReducers(reducers);
  const logger = createLogger({ collapsed: true });
  const devEnv = process.env.NODE_ENV === 'development';
  const reduxMiddleware =
    devEnv && process.browser
      ? applyMiddleware(epicMiddleware, logger)
      : applyMiddleware(epicMiddleware);

  const store = createStore(reducer, initialState, reduxMiddleware);
  epicMiddleware.run(rootEpic);

  return store;
};
