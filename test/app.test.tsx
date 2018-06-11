import { test } from "ava";
import "jsdom-global/register";
import * as React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import * as configureStore from "redux-mock-store";
import App from "../src/app";

const mockStore = configureStore();
const initialState = { todos: [] };

test("renders without crashing", t => {
  const div = document.createElement("div");
  const store = mockStore(initialState);
  render(
    <Provider store={store}>
      <App />
    </Provider>,
    div
  );
  t.pass("Success");
});
