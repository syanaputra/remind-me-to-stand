import React from 'react';
import Pill from './Pill';
import renderer from 'react-test-renderer';

test('render component: Pill', () => {
  const component = renderer.create(<Pill />);
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});