import * as React from "react";
import { connect } from "react-redux";
import Todo from "./Todo";
import { getTodos } from "./selectors";
import { toggleTodo } from "./actions";

import "./TodoList.scss";

interface Props {
  todos: any[];
  toggleTodo: Function;
}

const mapStateToProps = state => {
  return { ...state, todos: getTodos(state) };
};

const mapDispatchToProps = {
  toggleTodo
};

class TodoList extends React.Component<Props, any> {
  props: any;
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <ul className="page-todo-list">
        {this.props.todos.map(todo => (
          <Todo key={todo.id} {...todo} onToggle={this.props.toggleTodo} />
        ))}
      </ul>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
