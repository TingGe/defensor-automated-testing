/**
 * 应用入口文件
 */

import * as React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import App from './app';
import configureStore from './configureStore';
import registerServiceWorker from './registerServiceWorker';

const store = configureStore();

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('page-root') as HTMLElement
);
registerServiceWorker();
