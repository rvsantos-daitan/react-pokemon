import { createStore, applyMiddleware } from "redux";
import { dataReducer, filterReducer, highlightedPokemonReducer } from "./reducers"

import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { combineReducers } from "@reduxjs/toolkit";

const reducers = combineReducers({
    initialData: dataReducer,
    filterState: filterReducer,
    highlightedState: highlightedPokemonReducer
})

export const store = createStore(reducers, composeWithDevTools(applyMiddleware(thunk)));

export type storeDispatch = typeof store.dispatch;
export type StoreState = ReturnType<typeof store.getState>;