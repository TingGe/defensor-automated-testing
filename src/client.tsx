import * as React from 'react';
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import { Provider } from 'react-redux';

import Root from './Root';
import configureStore from './store';

const store = configureStore.default();
const history = configureStore.history;

render(
  <AppContainer>
    <Provider store={store}>
      <Root history={history} />
    </Provider>
  </AppContainer>,
  document.getElementById('root'),
);
