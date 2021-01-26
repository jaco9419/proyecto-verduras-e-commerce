export const initialState = {
    basket: [],
}

const reducer = (state, action) => {
    console.log(action);
    switch(action.type) {
        case 'ADD_TO_BASKET':
            // Logic
            return { 
                ...state,
                basket: [...state.basket, action.item]
            };
        case 'REMOVE_FROM_BASKET':
            // Logic
            return { state };
        default:
            return state;
    }
}

export default reducer;