type setSortByType = {
    type: 'SET_SORT_BY',
    payload: string
}

export const setSortBy = (name: string): setSortByType => {
    return {
        type: 'SET_SORT_BY',
        payload: name
    } as const
}

type setCategoryType = {
    type: 'SET_CATEGORY',
    payload: number
}

export const setCategory = (catIndex: number): setCategoryType => {
    return {
        type: 'SET_CATEGORY',
        payload: catIndex
    } as const
}


export type generalActionsForFilters = setSortByType | setCategoryType;