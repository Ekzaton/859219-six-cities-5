import {applyMiddleware, combineReducers, createStore} from "redux";
import {composeWithDevTools} from "redux-devtools-extension";
import thunk from "redux-thunk";

import {appReducer} from "./app/reducer";
import {fetchOffers} from "./data/api-actions";
import {dataReducer} from "./data/reducer";
import {APIMiddleware} from "./data/types";
import {createAPI} from "../services/api";

const api = createAPI();
const rootReducer = combineReducers({app: appReducer, data: dataReducer});
const store = createStore(
    rootReducer,
    composeWithDevTools(
        applyMiddleware(
            thunk.withExtraArgument(api) as APIMiddleware
        )
    )
);

store.dispatch(fetchOffers());

export type RootState = ReturnType<typeof rootReducer>
export default store;
