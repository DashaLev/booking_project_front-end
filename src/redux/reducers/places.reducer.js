const initialState = { placesList:[]}

export const placesReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'GET_PLACES_LIST':
            return {...state, placesList:[...action.payload]}
        default:
            return state
    }
}