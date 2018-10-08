import React from 'react';
import Header from '../components/Header';
import renderer from 'react-test-renderer';

test('Test component snapshot', () => {
  const component = renderer.create(<Header />);

  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
