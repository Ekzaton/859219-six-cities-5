import {applyMiddleware, createStore} from "redux";
import {composeWithDevTools} from "redux-devtools-extension";
import thunk from "redux-thunk";

import {fetchOffers} from "./api-actions";
import {reducer} from "./reducer";
import {APIMiddleware} from "./types";
import {createAPI} from "../services/api";

const api = createAPI();
const store = createStore(
    reducer,
    composeWithDevTools(
        applyMiddleware(
            thunk.withExtraArgument(api) as APIMiddleware
        )
    )
);

store.dispatch(fetchOffers());

export default store;
