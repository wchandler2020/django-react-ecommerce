import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import {composeWithDevTools, cp} from "redux-devtools-extension";
import {productListReducers} from "./reducers/productReducers"

//combines multiple reducers
const reducer = combineReducers({
    productList: productListReducers,
});
const initialState = {};
const middleware = [thunk];

const store = createStore(reducer, initialState, composeWithDevTools(applyMiddleware(...middleware)));

export default store;