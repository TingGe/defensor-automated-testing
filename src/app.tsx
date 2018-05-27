import * as React from 'react';
import TodoList from './TodoList/TodoList';

class App extends React.Component<any, any> {
  render() {
    return (
      <div className="app">
        <div className="app-header">Logo</div>
        <TodoList />
      </div>
    );
  }
}

export default App;
