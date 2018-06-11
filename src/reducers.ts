import { combineReducers } from 'redux';
import { reducer as todoListReducer } from './TodoList/TodoListRedux';

export default combineReducers({
  todoList: todoListReducer
});
