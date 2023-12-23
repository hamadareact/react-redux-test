import { createStore,combineReducers ,applyMiddleware} from "redux";
import { reducerCounter } from "./reducers/reducer";
import {thunk} from "redux-thunk";
import { ReducerProduct } from "./reducers/ReducerProduct";

const appReducer= combineReducers({
    myCounter:reducerCounter,
    products:ReducerProduct
})
export const store =createStore(appReducer,applyMiddleware(thunk));



// import {applyMiddleware, createStore} from "redux"

// import { composeWithDevTools } from 'redux-devtools-extension'
// import {thunk} from "redux-thunk";
// import { reducerCounter } from "./reducer";

// const store = createStore(reducerCounter, composeWithDevTools(applyMiddleware(thunk)))


// export default store;