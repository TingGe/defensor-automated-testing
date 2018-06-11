import { test } from "ava";
import { shallow } from "enzyme";
import * as React from "react";
import * as sinon from "sinon";
import Todo from "src/TodoList/Todo";

const empty = () => {
  return;
};

test("outputs given text", t => {
  const wrapper = shallow(
    <Todo id={1} text="buy milk" completed={false} onToggle={empty} />
  );
  t.regex(wrapper.render().text(), /buy milk/);
});

test("has a strikethrough if completed", t => {
  const wrapper = shallow(
    <Todo id={1} text="buy milk" completed={true} onToggle={empty} />
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
