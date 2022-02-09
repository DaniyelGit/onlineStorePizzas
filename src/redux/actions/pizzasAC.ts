import {ArrPizzasType} from "../../App";

type setPizzasType = {
    type: 'SET_PIZZAS',
    payload: ArrPizzasType
}

export const setPizzas = (items: ArrPizzasType): setPizzasType => {
    return {
        type: 'SET_PIZZAS',
        payload: items,
    } as const
}

export type generalActionsForPizzas = setPizzasType