import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import Count from './Count';
import { store } from './store';

ReactDOM.render(
  <Provider store={store}>
    <Count />
  </Provider>,
  document.getElementById('root')
);
