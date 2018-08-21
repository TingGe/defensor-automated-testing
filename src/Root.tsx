import * as React from 'react';
import { hot } from 'react-hot-loader';
import { ConnectedRouter } from 'react-router-redux';

import routes from './routes';

const Root = ({ history }) => {
  return <ConnectedRouter history={history}>{routes}</ConnectedRouter>;
};

export default hot(module)(Root);
