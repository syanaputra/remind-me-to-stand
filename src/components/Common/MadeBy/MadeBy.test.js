import React from 'react';
import { render } from '@testing-library/react';
import MadeBy from './MadeBy';

test('render component: MadeBy', () => {
  const { getByText } = render(<MadeBy />);
  const linkElement = getByText(/made with love in/i);
  expect(linkElement).toBeInTheDocument();
});
