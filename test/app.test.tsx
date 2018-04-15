import "jsdom-global/register";
import { test } from "ava";
import { shallow } from "enzyme";
import * as React from "react";
import { render } from "react-dom";
import App from "src/app";

test("renders without crashing", t => {
  render(<App />, document.createElement("div"));
  t.pass("Pass");
});
