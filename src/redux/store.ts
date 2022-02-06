import {combineReducers, createStore} from "redux"


const rootReducer = combineReducers({

});


export type rootReducerType = ReturnType<typeof rootReducer>;

export const store = createStore(rootReducer);
