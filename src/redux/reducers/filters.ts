import {generalActionsForFilters} from "../actions/filtersAC";

type initialStateType = {
    category: number
    sortBy: string
}

const initialState: initialStateType = {
    category: 0,
    sortBy: 'popular',
}

export const FiltersReducer = (state = initialState, action: generalActionsForFilters) => {
    switch (action.type) {
        case 'SET_SORT_BY': {
            return {
                ...state, sortBy: action.payload
            };
        }
        default: {
            return state;
        }
    }
}