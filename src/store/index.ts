import {applyMiddleware, combineReducers, createStore} from "redux";
import {composeWithDevTools} from "redux-devtools-extension";
import thunk from "redux-thunk";

import {appReducer} from "./app/reducer";
import {dataReducer} from "./data/reducer";
import {userReducer} from "./user/reducer";

import {fetchOffers} from "./data/api-actions";
import {APIMiddleware} from "./data/types";
import {createAPI} from "../services/api";

const thunkAPI = thunk.withExtraArgument(createAPI()) as APIMiddleware;
const rootReducer = combineReducers({app: appReducer, data: dataReducer, user: userReducer});
const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunkAPI)));

store.dispatch(fetchOffers());

export type RootState = ReturnType<typeof rootReducer>
export default store;
