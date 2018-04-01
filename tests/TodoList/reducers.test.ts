import { test } from "ava";
import { reducer as todosReducer } from "src/TodoList/reducers";
import { toggleTodo } from "src/TodoList/actions";

test("todos reducer", t => {
  t.deepEqual(
    todosReducer(
      [
        { id: 0, completed: false, text: "buy milk" },
        { id: 1, completed: false, text: "walk the dog" },
        { id: 2, completed: false, text: "study" }
      ],
      toggleTodo(1)
    ),
    [
      { id: 0, completed: false, text: "buy milk" },
      { id: 1, completed: true, text: "walk the dog" },
      { id: 2, completed: false, text: "study" }
    ]
  );
});
