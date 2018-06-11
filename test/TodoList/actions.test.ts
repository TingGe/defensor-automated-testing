import { test } from "ava";
import { actions, Types } from "src/TodoList/TodoListRedux";

test("toggleTodo action", t => {
  t.deepEqual(actions.toggleTodo(5), {
    type: Types.toggleTodo,
    payload: 5
  });
});
