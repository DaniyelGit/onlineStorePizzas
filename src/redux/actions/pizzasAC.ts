type setPizzasType = {
    type: 'SET_PIZZAS',
    payload: []
}

export const setPizzas = (items: []): setPizzasType => {
    return {
        type: 'SET_PIZZAS',
        payload: items
    } as const
}

export type generalActionsForPizzas = setPizzasType