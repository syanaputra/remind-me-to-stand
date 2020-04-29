import React from 'react';
import About from './About';
import renderer from 'react-test-renderer';

test('render component: About', () => {
  const component = renderer.create(<About />);
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
