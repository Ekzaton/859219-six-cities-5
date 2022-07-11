import React from 'react';
import {Provider} from 'react-redux';
import {MemoryRouter} from 'react-router-dom';
import createMockStore from 'redux-mock-store';
import {render} from '@testing-library/react';

import {AuthStatus} from "../../consts/common";
import offersMock from "../../mock/offers.json";
import {Offer} from "../../types/common";
import {getOffersByCity} from "../../utils/store";

import FavoritesList from "./favorites-list";

describe(`Favorites list renders correctly`, () => {
  const mockStore = createMockStore([]);
  const offersByCity = getOffersByCity(offersMock as Offer[]);

  it(`for authorized user`, () => {
    const store = mockStore({
      login: {
        authStatus: AuthStatus.AUTH
      }
    });

    const {container} = render(
        <Provider store={store}>
          <MemoryRouter>
            <FavoritesList
              offersByCity={offersByCity}
            />
          </MemoryRouter>
        </Provider>
    );

    expect(container).toMatchSnapshot();
  });
});
