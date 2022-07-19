import React from 'react';
import {MemoryRouter} from 'react-router-dom';
import {render} from '@testing-library/react';

import ErrorPage from "./error-page";

describe(`Error page renders correctly`, () => {
  it(`for loading error`, () => {
    const loadingError = {
      data: {error: `Sorry service is not available!`},
      status: 503,
      statusText: `Temporarily Unavailable`,
      headers: [],
      config: {}
    };

    const {container} = render(
        <MemoryRouter>
          <ErrorPage
            loadingError={loadingError}
          />
        </MemoryRouter>
    );

    expect(container).toMatchSnapshot();
  });

  it(`for unknown route`, () => {
    const {container} = render(
        <MemoryRouter>
          <ErrorPage/>
        </MemoryRouter>
    );

    expect(container).toMatchSnapshot();
  });
});
