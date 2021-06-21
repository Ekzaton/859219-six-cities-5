import {AxiosInstance} from "axios";
import {applyMiddleware, combineReducers, createStore} from "redux";
import {composeWithDevTools} from "redux-devtools-extension";
import thunk, {ThunkAction, ThunkMiddleware} from "redux-thunk";

import {appReducer} from "./app/reducer";
import {dataReducer} from "./data/reducer";
import {userReducer} from "./user/reducer";

import {AppAction} from "../types/store/app";
import {DataAction} from "../types/store/data";
import {UserAction} from "../types/store/user";

import {redirect} from "../middlewares/redirect";
import {createAPI} from "../services/api";

const api = createAPI();
const thunkWithAPI = thunk.withExtraArgument(api);
const rootReducer = combineReducers({app: appReducer, data: dataReducer, user: userReducer});
const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunkWithAPI as APIMiddleware, redirect)));

export type RootState = ReturnType<typeof rootReducer>;
type RootAction = AppAction | DataAction | UserAction;
type APIMiddleware = ThunkMiddleware<RootState, RootAction, AxiosInstance>;
export type APIAction = ThunkAction<void, RootState, AxiosInstance, RootAction>;

export default store;
