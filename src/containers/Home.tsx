import * as React from 'react';

export default class Home extends React.Component {
  public componentDidCatch(ex: Error) {
    console.log(ex.message);
  }
  public render() {
    return <span>Hello world</span>;
  }
}
