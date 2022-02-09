import {compose, createStore} from "redux"
import {rootReducer} from "./reducers";



const composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; // settings de


export const store = createStore(rootReducer, composeEnhancers());

// @ts-ignore
console.log(window.store = store);