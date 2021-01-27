export const initialState = {
    basket: [],
    qty: 1
}

const reducer = (state, action) => {
    console.log(action.item);
    switch(action.type) {
        case 'ADD_TO_BASKET':
            // Logic
            return { 
                ...state,
                basket: [...state.basket, action.item]
            };
        case 'INCREASE_QTY':
            return {
                ...state,
                qty: ++state.qty,
            };
        case 'REMOVE_FROM_BASKET':
            // Logic
            return { state };
        default:
            return state;
    }
}

export default reducer;