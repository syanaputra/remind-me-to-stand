import React from 'react';
import Pill from './Pill';
import { render } from '@testing-library/react';

test("render component: Pill", () => {
  const { getByText } = render(
    <Pill
      text={'lorem'}
    />
  );

  const linkElement = getByText(/lorem/i);
  expect(linkElement).toBeInTheDocument();
});