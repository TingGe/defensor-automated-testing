import test from 'ava';
import { getTodos } from '../../src/TodoList/selectors';

test('getTodos selector', t => {
  const todos = [
    { id: 0, completed: false, text: 'buy milk' },
    { id: 1, completed: false, text: 'walk the dog' },
    { id: 2, completed: false, text: 'study' }
  ];
  t.deepEqual(getTodos({ todos }), todos);
});
