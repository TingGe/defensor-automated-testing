// context.js
import * as React from "react";

const { createContext } = React;
const AppContext = createContext();

// self 是对 <Provider> 组件实例的引用
let self = null;

class Provider extends React.Component {
  props: React.ReactElement;
  state = {};

  constructor(props) {
    super(props);
    self = this;
  }

  render() {
    return (
      <AppContext.Provider value={this.state}>
        {this.props.children}
      </AppContext.Provider>
    );
  }
}

const Consumer = AppContext.Consumer;

function getState() {
  if (self) {
    return self.state;
  } else {
    console.warn("cannot getState() because <Provider> is not initialized");
  }
}

function setState(...args) {
  if (self) {
    self.setState(...args);
  } else {
    console.warn("cannot setState() because <Provider> is not initialized");
  }
}

function createStore() {
  return {
    getState,
    setState
  };
}

export { Provider, Consumer, createStore };
