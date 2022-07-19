import React from 'react';
import {render} from '@testing-library/react';

import FavoritesPageEmpty from "./favorites-page-empty";

test(`Empty favorites list renders correctly`, () => {
  const {container} = render(
      <FavoritesPageEmpty/>
  );

  expect(container).toMatchSnapshot();
});
