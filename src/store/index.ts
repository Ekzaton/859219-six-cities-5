import {AxiosInstance} from "axios";
import {applyMiddleware, combineReducers, createStore} from "redux";
import {composeWithDevTools} from "redux-devtools-extension";
import thunk, {ThunkAction, ThunkMiddleware} from "redux-thunk";

import {fetchOffers} from "./data/api-actions";
import {checkAuthStatus} from "./user/api-actions";

import {appReducer} from "./app/reducer";
import {dataReducer} from "./data/reducer";
import {userReducer} from "./user/reducer";

import {AppAction} from "./app/types";
import {DataAction} from "./data/types";
import {UserAction} from "./user/types";

import {createAPI} from "../services/api";

type Action = AppAction | DataAction | UserAction;
type APIMiddleware = ThunkMiddleware<RootState, Action, AxiosInstance>;

const thunkAPI = thunk.withExtraArgument(createAPI()) as APIMiddleware;
const rootReducer = combineReducers({app: appReducer, data: dataReducer, user: userReducer});
const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunkAPI)));

store.dispatch(fetchOffers());
store.dispatch(checkAuthStatus());

export type RootState = ReturnType<typeof rootReducer>;
export type APIAction = ThunkAction<void, RootState, AxiosInstance, Action>;
export default store;
