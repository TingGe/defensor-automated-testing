import * as React from "react";
import { Provider, Consumer, createStore } from "./context";
import Child from "./Child";

// 新建一个全局 store
const store = createStore();

class App extends React.Component {
  componentDidMount() {
    // 父组件触发状态更新
    setInterval(() => {
      store.setState({ date: new Date().toString() });
    }, 1e3);
  }

  render() {
    return (
      // 现在 <Provider> 不需要任何参数了
      <Provider>
        <Child />
      </Provider>
    );
  }
}

export default App;
