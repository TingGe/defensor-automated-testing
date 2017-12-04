import { test } from 'ava';
import { toggleTodo, TOGGLE_TODO } from '../../src/TodoList/actions';

test('toggleTodo action', t => {
  t.deepEqual(toggleTodo(5), {
    type: TOGGLE_TODO,
    payload: 5
  });
});
