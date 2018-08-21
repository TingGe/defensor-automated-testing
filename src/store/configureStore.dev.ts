import { init, model } from '@rematch/core';
import createHistory from 'history/createBrowserHistory';
import { Iterable } from 'immutable';
import { routerMiddleware, routerReducer } from 'react-router-redux';
import { createLogger } from 'redux-logger';
import thunkMiddleware from 'redux-thunk';

import models from '../models';

// tslint:disable-next-line:no-any
declare var module: { hot: any };

export const history = createHistory();

const middlewares = [
  routerMiddleware(history),
  thunkMiddleware,
  createLogger({
    collapsed: true,
    stateTransformer: state => {
      return Iterable.isIterable(state) ? state.toJS() : state;
    },
  }),
];

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

  if (module.hot) {
    // Hot module replacement for reducers
    module.hot.accept('../models', () => {
      Object.keys(models).forEach(modelKey => {
        model({
          name: modelKey,
          ...models[modelKey],
        });
      });
    });
  }

  return store;
};

export default configureStore;
