import React from 'react';
import TimePills from './TimePills';
import renderer from 'react-test-renderer';

test('render component: TimePills', () => {
  const dummyAction = {
    start: () => {},
    modify: () => {},
  }

  const component = renderer.create(<TimePills timerAction={dummyAction} />);
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
