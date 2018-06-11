import { test } from "ava";
import { mount } from "enzyme";
import * as React from "react";
import { Provider } from "react-redux";
import * as configureStore from "redux-mock-store";
import TodoList from "src/TodoList/TodoList";
import { actions } from 'src/TodoList/TodoListRedux';

const mockStore = configureStore();
const initialState = {
  todos: [
    { id: 0, completed: false, text: "buy milk" },
    { id: 1, completed: false, text: "walk the dog" },
    { id: 2, completed: false, text: "study" }
  ]
};

test("dispatches toggleTodo action", t => {
  const store = mockStore(initialState);
  const wrapper = mount(
    <Provider store={store}>
      <TodoList />
    </Provider>
  );
  wrapper
    .find("Todo")
    .at(0)
    .simulate("click");
  t.deepEqual(store.getActions(), [actions.toggleTodo(0)]);
});
