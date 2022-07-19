import {AxiosInstance} from "axios";
import {AnyAction, applyMiddleware, combineReducers, createStore} from "redux";
import {composeWithDevTools} from "redux-devtools-extension";
import thunk, {ThunkAction} from "redux-thunk";

import {redirect} from "../middlewares/redirect";
import {createAPI} from "../services/api";

import {favoritesReducer} from "./favorites/reducer";
import {loginReducer} from "./login/reducer";
import {mainReducer} from "./main/reducer";
import {propertyReducer} from "./property/reducer";

const api = createAPI();
const thunkWithAPI = thunk.withExtraArgument(api);

const rootReducer = combineReducers({
  favorites: favoritesReducer,
  login: loginReducer,
  main: mainReducer,
  property: propertyReducer,
});

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunkWithAPI, redirect)));

export type AppState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppThunkAction = ThunkAction<void, AppState, AxiosInstance, AnyAction>;
export default store;
