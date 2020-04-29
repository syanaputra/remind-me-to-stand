import React from 'react';
import SideModal from './SideModal';
import renderer from 'react-test-renderer';

test('render component: Footer', () => {
  const component = renderer.create(<SideModal />);
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
