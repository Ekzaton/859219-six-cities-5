import React from 'react';
import {Provider} from 'react-redux';
import createMockStore from 'redux-mock-store';
import {render} from '@testing-library/react';

import {CityName} from "../../consts/common";

import CitiesList from "./cities-list";

describe(`Cities list renders correctly`, () => {
  const mockStore = createMockStore([]);
  const store = mockStore();

  it(`for initial city`, () => {
    const {container} = render(
        <Provider store={store}>
          <CitiesList
            currentCity={CityName.PARIS}
          />
        </Provider>
    );

    expect(container).toMatchSnapshot();
  });

  it(`for selected city`, () => {
    const {container} = render(
        <Provider store={store}>
          <CitiesList
            currentCity={CityName.AMSTERDAM}
          />
        </Provider>
    );

    expect(container).toMatchSnapshot();
  });
});
