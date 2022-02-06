import {generalActionsForPizzas} from "../actions/pizzasAC";

type initialStateType = {
    items: []
}

const initialState: initialStateType = {
    items: [],
}

export const PizzasReducer = (state = initialState, action: generalActionsForPizzas) => {
    switch (action.type) {
        case 'SET_PIZZAS': {
            return {
                ...state, items: action.payload
            };
        }
        default: {
            return state;
        }
    }
}