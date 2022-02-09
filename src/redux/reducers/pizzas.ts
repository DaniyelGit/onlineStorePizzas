import {generalActionsForPizzas} from "../actions/pizzasAC";
import {ArrPizzasType} from "../../App";

type initialStateType = {
    items: ArrPizzasType
}

const initialState: initialStateType = {
    items: [],
}

export const PizzasReducer = (state = initialState, action: generalActionsForPizzas) => {
    switch (action.type) {
        case 'SET_PIZZAS': {
            return {
                ...state,
                items: action.payload
            };
        }
        default: {
            return state;
        }
    }
}