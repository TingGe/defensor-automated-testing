function createJestTest(filename) {
  const fileWithOutExt = filename.replace(/\.[^/.]+$/, '');
  const readableFilename = capitalizeFirstLetter(fileWithOutExt);
  return `import * as Enzyme from 'enzyme';
import * as Adapter from 'enzyme-adapter-react-16';
import toJson from 'enzyme-to-json';
import * as React from 'react';
import ${readableFilename} from '../${readableFilename}';

Enzyme.configure({ adapter: new Adapter() });

describe('${readableFilename}', () => {
  test('Should render ${readableFilename} correctly', () => {
    const wrapper = Enzyme.shallow(<${readableFilename} />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
`;
}

const capitalizeFirstLetter = string =>
  string.charAt(0).toUpperCase() + string.slice(1);

module.exports = { createJestTest };
