import * as React from 'react';
import { connect } from 'react-redux';
import { getTodos } from './selectors';
import Todo from './Todo';
import './TodoList.scss';
import { actions, InitialState } from './TodoListRedux';

const mapStateToProps = state => {
  return { ...state, todos: getTodos(state) };
};

const mapDispatchToProps = {
  ...actions
};

class TodoList extends React.Component<InitialState & typeof mapDispatchToProps, any> {
  render() {
    return (
      <ul className="page-todo-list">
        {this.props.todos.map(todo => <Todo key={todo.id} {...todo} onToggle={this.props.toggleTodo} />)}
      </ul>
    );
  }
}

export default connect<InitialState, typeof mapDispatchToProps>(
  mapStateToProps,
  mapDispatchToProps
)(TodoList);
