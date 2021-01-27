export const initialState = {
    basket: [],
    qty: Array(7).fill(1),
}

const reducer = (state, action) => {
    //console.log(action.item);
    console.log(state.basket);
    switch(action.type) {
        case 'ADD_TO_BASKET':
            // Logic
            return { 
                ...state,
                basket: [...state.basket, action.item]
            };
        case 'INCREASE_QTY': {
            const qtyIndex = action.item.index;
            const newQty = [...state.qty];
            newQty[qtyIndex]++;
            return {
                ...state,
                qty: [...newQty]
            };
        }
        case 'DECREASE_QTY': {
            const qtyIndex = action.item.index;
            const newQty = [...state.qty];
            if (newQty[qtyIndex] > 1) {
                newQty[qtyIndex]--;
            }
            return {
                ...state,
                qty: [...newQty]
            };
        }
        case 'REMOVE_FROM_BASKET':
            // Logic
            return { state };
        default:
            return state;
    }
}

export default reducer;