import { createStore, applyMiddleware } from "redux";
import { dataReducer, filterReducer } from "./reducers"

import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { combineReducers } from "@reduxjs/toolkit";

const reducers = combineReducers({ initialData: dataReducer, filterState: filterReducer })

export const store = createStore(reducers, composeWithDevTools(applyMiddleware(thunk)));

export type FavoriteDispatch = typeof store.dispatch;
export type StoreState = ReturnType<typeof store.getState>;