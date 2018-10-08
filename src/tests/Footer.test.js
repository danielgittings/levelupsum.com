import React from 'react';
import Footer from '../components/Footer';
import renderer from 'react-test-renderer';

test('Test component snapshot', () => {
  const component = renderer.create(<Footer />);

  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
