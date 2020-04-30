import React from 'react';
import Heading from './Heading';
import { render } from '@testing-library/react';

test('render component: Heading', () => {
  const { getByText } = render(<Heading>Title</Heading>);
  const linkElement = getByText(/Title/i);
  expect(linkElement).toBeInTheDocument();
});
