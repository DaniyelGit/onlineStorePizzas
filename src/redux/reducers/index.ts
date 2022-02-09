import {combineReducers} from "redux";

import {FiltersReducer} from "./filters";
import {PizzasReducer} from "./pizzas";



export const rootReducer = combineReducers({
    filters: FiltersReducer,
    pizzas: PizzasReducer,
});

export type rootReducerType = ReturnType<typeof rootReducer>;
