import React from 'react';
import TimerInput from './TimerInput';
import renderer from 'react-test-renderer';

test('render component: TimerInput', () => {
  const component = renderer.create(<TimerInput
    onChange={() => {}}
    onBlur={() => {}}
    onClick={() => {}}
    value={''} 
  />);
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
