import React from 'react';
import Timer from './Timer';
import renderer from 'react-test-renderer';

test('render component: Timer', () => {
  const dummyAction = {
    start: () => {},
    modify: () => {},
  }

  const dummyData = {
    timeLeft: 0,
    status: 'finished',
  }

  const component = renderer.create(<Timer data={dummyData} timerAction={dummyAction} />);
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
