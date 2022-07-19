import React from 'react';
import {Provider} from 'react-redux';
import createMockStore from 'redux-mock-store';
import {render} from '@testing-library/react';

import {BtnType} from "../../consts/components";
import offersMock from "../../mock/offers.json";
import {Offer} from "../../types/common";

import BookmarkButton from "./bookmark-button";

describe(`Bookmark button renders correctly`, () => {
  const mockStore = createMockStore([]);
  const store = mockStore();

  it(`for place card (active)`, () => {
    const offer = offersMock[3] as Offer;

    const {container} = render(
        <Provider store={store}>
          <BookmarkButton
            offer={offer}
            type={BtnType.PLACE_CARD}
          />
        </Provider>
    );

    expect(container).toMatchSnapshot();
  });

  it(`for place card (inactive)`, () => {
    const offer = offersMock[3] as Offer;

    const {container} = render(
        <Provider store={store}>
          <BookmarkButton
            offer={offer}
            type={BtnType.PLACE_CARD}
          />
        </Provider>
    );

    expect(container).toMatchSnapshot();
  });

  it(`for property page (active)`, () => {
    const offer = offersMock[0] as Offer;

    const {container} = render(
        <Provider store={store}>
          <BookmarkButton
            offer={offer}
            type={BtnType.PROPERTY}
          />
        </Provider>
    );

    expect(container).toMatchSnapshot();
  });

  it(`for property page (inactive)`, () => {
    const offer = offersMock[0] as Offer;

    const {container} = render(
        <Provider store={store}>
          <BookmarkButton
            offer={offer}
            type={BtnType.PROPERTY}
          />
        </Provider>
    );

    expect(container).toMatchSnapshot();
  });
});

