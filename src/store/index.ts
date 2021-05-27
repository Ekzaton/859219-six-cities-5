import {applyMiddleware, createStore} from "redux";
import {composeWithDevTools} from "redux-devtools-extension";
import thunk from "redux-thunk";

import {reducer} from "./reducer";
import {createAPI} from "../services/api";

const api = createAPI();
const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk.withExtraArgument(api))));

export default store;
