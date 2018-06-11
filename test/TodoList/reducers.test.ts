import { test } from "ava";
import { actions, reducer as todosReducer } from "src/TodoList/TodoListRedux";

test("todos reducer", t => {
  t.deepEqual(
    todosReducer(
      {
        todos: [
          { id: 0, completed: false, text: "buy milk" },
          { id: 1, completed: false, text: "walk the dog" },
          { id: 2, completed: false, text: "study" }
        ]
      },
      actions.toggleTodo(1)
    ),
    {
      todos: [
        { id: 0, completed: false, text: "buy milk" },
        { id: 1, completed: false, text: "walk the dog" },
        { id: 2, completed: false, text: "study" }
      ]
    }
  );
});
