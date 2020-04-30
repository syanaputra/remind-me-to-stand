import React from 'react';
import MadeBy from './MadeBy';
import { render } from '@testing-library/react';

test('render component: MadeBy', () => {
  const { getByText } = render(<MadeBy />);
  const linkElement = getByText(/made with love in/i);
  expect(linkElement).toBeInTheDocument();
});
