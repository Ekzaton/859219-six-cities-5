import React from 'react';
import {render} from '@testing-library/react';

import LoadingPage from "./loading-page";

test(`Loading page renders correctly`, () => {
  const {container} = render(
      <LoadingPage/>
  );

  expect(container).toMatchSnapshot();
});
