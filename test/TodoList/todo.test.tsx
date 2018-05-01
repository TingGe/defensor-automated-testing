import * as React from "react";
import { test } from "ava";
import * as sinon from "sinon";
import { shallow } from "enzyme";
import Todo from "src/TodoList/Todo";

test("outputs given text", t => {
  const wrapper = shallow(
    <Todo id={1} text="buy milk" completed={false} onToggle={() => {}} />
  );
  t.regex(wrapper.render().text(), /buy milk/);
});

test("has a strikethrough if completed", t => {
  const wrapper = shallow(
    <Todo id={1} text="buy milk" completed onToggle={() => {}} />
  );
  t.is(wrapper.prop("style").textDecoration, "line-through");
});

test("executed callback when clicked with its id", t => {
  const onToggle = sinon.spy();
  const wrapper = shallow(
    <Todo id={1} text="buy milk" completed={false} onToggle={onToggle} />
  );
  wrapper.simulate("click");
  t.true(onToggle.calledWith(1));
});
