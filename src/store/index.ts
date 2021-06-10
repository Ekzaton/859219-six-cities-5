import {AxiosInstance} from "axios";
import {applyMiddleware, combineReducers, createStore} from "redux";
import {composeWithDevTools} from "redux-devtools-extension";
import thunk, {ThunkAction, ThunkMiddleware} from "redux-thunk";

import {appReducer} from "./app/reducer";
import {dataReducer} from "./data/reducer";
import {userReducer} from "./user/reducer";

import {AppAction} from "./app/types";
import {DataAction} from "./data/types";
import {UserAction} from "./user/types";

import {redirect} from "../middlewares/redirect";
import {createAPI} from "../services/api";

const api = createAPI();
const thunkWithAPI = thunk.withExtraArgument(api);
const rootReducer = combineReducers({app: appReducer, data: dataReducer, user: userReducer});
const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunkWithAPI as APIMiddleware, redirect)));

export type RootState = ReturnType<typeof rootReducer>;
type Action = AppAction | DataAction | UserAction;
type APIMiddleware = ThunkMiddleware<RootState, Action, AxiosInstance>;
export type APIAction = ThunkAction<void, RootState, AxiosInstance, Action>;

export default store;
