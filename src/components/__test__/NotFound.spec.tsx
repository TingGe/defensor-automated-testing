import * as Enzyme from 'enzyme';
import * as Adapter from 'enzyme-adapter-react-16';
import toJson from 'enzyme-to-json';
import * as React from 'react';
import NotFound from '../NotFound';

Enzyme.configure({ adapter: new Adapter() });

describe('NotFound', () => {
  test('NotFound render', () => {
    const wrapper = Enzyme.shallow(<NotFound />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
