/**
 * 应用入口文件
 */

import * as React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import App from './app';

import configureStore from './configureStore';
import { toggleTodo } from './TodoList/actions';
import registerServiceWorker from './registerServiceWorker';

const store = configureStore({
  todos: [
    { id: 0, completed: false, text: 'buy milk' },
    { id: 1, completed: false, text: 'walk the dog' },
    { id: 2, completed: false, text: 'study' }
  ]
});

store.dispatch(toggleTodo(1));

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
