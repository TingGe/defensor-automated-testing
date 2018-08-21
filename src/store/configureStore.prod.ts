import { init, model } from '@rematch/core';
import createHistory from 'history/createBrowserHistory';
import { routerMiddleware, routerReducer } from 'react-router-redux';
import thunkMiddleware from 'redux-thunk';

import models from '../models';

export const history = createHistory();

const middlewares = [routerMiddleware(history), thunkMiddleware];

const configureStore = (initialState = {}) => {
  const store = init({
    models,
    redux: {
      middlewares,
      reducers: {
        routing: routerReducer,
        ...initialState,
      },
    },
  });

  return store;
};

export default configureStore;
