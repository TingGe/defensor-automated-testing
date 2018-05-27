export const TOGGLE_TODO = 'TOGGLE_TODO';

export const toggleTodo = id => ({
  type: TOGGLE_TODO,
  payload: id
});
