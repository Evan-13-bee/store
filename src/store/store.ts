import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import { productsReducer } from "../reducers/ProductsReducer";

const rootReducers = combineReducers({
  productsReducer
})

export const store = createStore(rootReducers, applyMiddleware(thunk))

export type AppRootStateType = ReturnType<typeof rootReducers>