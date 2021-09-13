import React from 'react';
import SideModal from './SideModal';
import { render } from '@testing-library/react';

test("render component: SideModal", () => {
  const { getByText } = render(
    <SideModal
      Heading={<div>Head</div>}
      Body={<div>Body</div>}
    />
  );

  const headText = getByText(/Head/i);
  expect(headText).toBeInTheDocument();

  const bodyText = getByText(/Body/i);
  expect(bodyText).toBeInTheDocument();
});