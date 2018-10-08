import React from 'react';
import Controls from '../components/Controls';
import renderer from 'react-test-renderer';

test('Test component snapshot', () => {
  const component = renderer.create(<Controls />);

  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
