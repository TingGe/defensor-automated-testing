import * as React from 'react';

interface Props {
  id: number;
  completed: boolean;
  text: React.ReactNode;
  onToggle: () => void;
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
    const textDecoration = this.props.completed ? 'line-through' : 'none';
    return (
      <li style={{ textDecoration }} onClick={this.onClick}>
        {this.props.text}
      </li>
    );
  }
}

export default Todo;
