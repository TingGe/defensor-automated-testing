/** 类型 */
const Types = {
  toggleTodo: []
};

/**
 * actions 和 InitialState
 */
const actions = {
  toggleTodo: id => ({
    type: Types.toggleTodo,
    payload: id
  })
};

class InitialState {
  todos = [
    { id: 0, completed: false, text: 'buy milk' },
    { id: 1, completed: false, text: 'walk the dog' },
    { id: 2, completed: false, text: 'study' }
  ];
}

/** reducer */
const reducer = (state = new InitialState(), action: any): InitialState => {
  switch (action.type) {
    case Types.toggleTodo: {
      const newTodos = state.todos.map(t => {
        if (t.id === action.payload) {
          return { ...t, completed: !t.completed };
        }
        return t;
      });
      return {
        ...state,
        todos: newTodos
      };
    }
    default:
      return state;
  }
};

export { Types, actions, reducer, InitialState };
