import React from 'react';
import {Provider} from 'react-redux';
import {MemoryRouter} from 'react-router-dom';
import createMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import {act, render} from '@testing-library/react';

import {AuthStatus} from "../../consts/common";
import {DELAY_DURATION} from "../../consts/components";
import {redirect} from "../../middlewares/redirect";
import offersMock from "../../mock/offers.json";
import userMock from "../../mock/user.json";
import {createAPI} from "../../services/api";

import FavoritesPage from "./favorites-page";

describe(`Favorites page renders correctly`, () => {
  const api = createAPI();
  const thunkWithAPI = thunk.withExtraArgument(api);
  const mockStore = createMockStore([thunkWithAPI, redirect]);

  it(`for authorized user`, () => {
    const store = mockStore({
      favorites: {
        favoriteOffers: offersMock,
        isLoading: false
      },
      login: {
        authStatus: AuthStatus.AUTH,
        user: userMock
      }
    });

    const {container} = render(
        <Provider store={store}>
          <MemoryRouter>
            <FavoritesPage/>
          </MemoryRouter>
        </Provider>
    );

    expect(container).toMatchSnapshot();
  });

  it(`for authorized user (no offers)`, () => {
    const store = mockStore({
      favorites: {
        favoriteOffers: [],
        isLoading: false
      },
      login: {
        authStatus: AuthStatus.AUTH,
        user: userMock
      }
    });

    jest.useFakeTimers();

    const {container} = render(
        <Provider store={store}>
          <MemoryRouter>
            <FavoritesPage/>
          </MemoryRouter>
        </Provider>
    );

    act(() => {
      jest.advanceTimersByTime(DELAY_DURATION);
    });

    expect(container).toMatchSnapshot();
  });

  it(`for authorized user (loading)`, () => {
    const store = mockStore({
      favorites: {
        favoriteOffers: [],
        isLoading: true
      },
      login: {
        authStatus: AuthStatus.AUTH,
        user: userMock
      }
    });

    jest.useFakeTimers();

    const {container} = render(
        <Provider store={store}>
          <MemoryRouter>
            <FavoritesPage/>
          </MemoryRouter>
        </Provider>
    );

    act(() => {
      jest.advanceTimersByTime(DELAY_DURATION);
    });

    expect(container).toMatchSnapshot();
  });
});
