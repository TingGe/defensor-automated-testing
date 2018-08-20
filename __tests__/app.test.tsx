import { test } from 'ava';
import 'jsdom-global/register';
import * as React from 'react';
import { render } from 'react-dom';
import Count from '../src/Count';

test('renders without crashing', t => {
  const div = document.createElement('div');
  render(<Count />, div);
  t.pass('Success');
});
