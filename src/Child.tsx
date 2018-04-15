import * as React from "react";
import { Consumer, createStore } from "./context";

// 新建一个全局 store
const store = createStore();

class Child extends React.Component {
  render() {
    return (
      <>
        <p>1. 通过回调参数获取最新状态</p>
        <Consumer>{({ date }) => <div>{date}</div>}</Consumer>
        <p>2. 通过 store.getState() 获取所有状态</p>
        <Consumer>
          {() => <pre>{JSON.stringify(store.getState(), null, 2)}</pre>}
        </Consumer>
        <p>3. 通过 store.setState() 更新状态</p>
        <Consumer>
          {() => (
            <button
              onClick={() => store.setState({ foo: new Date().toString() })}
            >
              子组件触发状态更新
            </button>
          )}
        </Consumer>
      </>
    );
  }
}

export default Child;
