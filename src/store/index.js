import { createStore, combineReducers } from "redux";

import products from './reducers/products'
import orders from "./reducers/orders";


const stockApp = combineReducers({
    products,
    orders,

})


export const store = createStore(stockApp, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

let unsubscribe = store.subscribe(() => {
    let stringStore = JSON.stringify(store.getState())
    localStorage.setItem("store", stringStore)
    console.log(JSON.parse(localStorage.getItem("store")))
})