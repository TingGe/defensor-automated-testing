import { combineReducers } from 'redux';
import { reducer as todoListReducer } from 'src/TodoList/reducers';

export default combineReducers({
  todoListReducer
});
