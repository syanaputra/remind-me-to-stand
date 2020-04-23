import React from 'react';
import Heading from './Heading';
import renderer from 'react-test-renderer';

test('render component: Heading', () => {
  const component = renderer.create(<Heading>Title</Heading>);
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
