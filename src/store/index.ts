// tslint:disable-next-line:no-any
let configureStore: any;

// tslint:disable-next-line:prefer-conditional-expression
if (process.env.NODE_ENV === 'production') {
  // tslint:disable-next-line:no-var-requires
  configureStore = require('./configureStore.prod');
} else {
  // tslint:disable-next-line:no-var-requires
  configureStore = require('./configureStore.dev');
}

export default configureStore;
