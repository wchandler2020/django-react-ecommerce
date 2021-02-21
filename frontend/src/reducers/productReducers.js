//A reducers is a function that take in our current state and an action for what we want to do with this state
//this allows us to change and manipulate the state and return a new copy into our store

import {PRODUCT_LIST_FAIL, PRODUCT_LIST_SUCCESS, PRODUCT_LIST_REQUEST} from "../types/productType"

//will used to update different parts of product state
export const productListReducers = (state = {products: []}, action) => {
    switch(action.type){
        // if the products are loading
        case PRODUCT_LIST_REQUEST:
            return {loading: true, products: []}
        // when the api call returns data
        case PRODUCT_LIST_SUCCESS:
            return {loading: false, products: action.payload}
        // if there is an error returning data from the api call
        case PRODUCT_LIST_FAIL:
            return {loading: false, error: action.payload}
        // default state will be returned if the action doesnt match one of the switch casees
        default:
            return state
    }
}

