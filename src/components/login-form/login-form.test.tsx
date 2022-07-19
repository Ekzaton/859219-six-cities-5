import React from 'react';
import {Provider} from 'react-redux';
import createMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import {render} from '@testing-library/react';

import {redirect} from "../../middlewares/redirect";
import {createAPI} from "../../services/api";

import LoginForm from "./login-form";

describe(`Login form renders correctly`, () => {
  const api = createAPI();
  const thunkWithAPI = thunk.withExtraArgument(api);
  const mockStore = createMockStore([thunkWithAPI, redirect]);

  it(`for not authorized user`, () => {
    const store = mockStore({
      login: {
        isSending: false,
        sendingError: null
      }
    });

    const {container} = render(
        <Provider store={store}>
          <LoginForm/>
        </Provider>
    );

    expect(container).toMatchSnapshot();
  });

  it(`for not authorized user (sending)`, () => {
    const store = mockStore({
      login: {
        isSending: true,
        sendingError: null
      }
    });

    const {container} = render(
        <Provider store={store}>
          <LoginForm/>
        </Provider>
    );

    expect(container).toMatchSnapshot();
  });

  it(`for not authorized user (sending error)`, () => {
    const error = {
      data: {},
      status: 400,
      statusText: `Bad Request`,
      headers: [],
      config: {}
    };

    const store = mockStore({
      login: {
        isSending: true,
        sendingError: error
      }
    });

    const {container} = render(
        <Provider store={store}>
          <LoginForm/>
        </Provider>
    );

    expect(container).toMatchSnapshot();
  });
});
