import * as React from "react";

interface Props {
  id: number;
  completed: boolean;
  text: React.ReactNode;
  onToggle: Function;
}

class Todo extends React.Component<Props, any> {
  props: any;
  constructor(props) {
    super(props);
  }

  onClick = () => {
    this.props.onToggle(this.props.id);
  };

  render() {
    return (
      <li
        style={{
          textDecoration: this.props.completed ? "line-through" : "none"
        }}
        onClick={this.onClick}
      >
        {this.props.text}
      </li>
    );
  }
}

export default Todo;
