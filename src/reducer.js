const str = window.location.pathname;
const accountPath = str.match(/(?<=accounts\/+).*?(?=\/)/gs) || str.match(/(?<=accounts\/+).*/gs);
//console.log(accountPath);

export const initialState = {
    products: [],
    basket: [],
    qty: [],
    accountPath,
    accountInfo: {}
};

const reducer = (state, action) => {
    
    switch (action.type) {
        case 'PASS_USER_INFO':
            console.log(action.accountInfo);
            return {
                ...state,
                accountInfo: action.accountInfo
            }
        case 'PASS_PRODUCTS':
            const dataLength = action.item.data ? action.item.data.length : 1;
            return {
                ...state,
                products: action.item.data,
                qty: Array(dataLength).fill(1),
            }
        case 'ADD_TO_BASKET': {
            const itemIndex = action.item.index;
            const newBasket = [...state.basket];
            const basketIndex = newBasket.indexOf(
                newBasket.find((element) => element.index === itemIndex)
            );
            if (basketIndex !== -1) {
                newBasket.splice(basketIndex, 1, action.item);
            } else {
                newBasket.push(action.item);
            }
            return {
                ...state,
                basket: [...newBasket],
            };
        }
        case 'REMOVE_FROM_BASKET': {
            const itemIndex = action.item.index;
            const newBasket = [...state.basket];
            const basketIndex = newBasket.indexOf(
                newBasket.find((element) => element.index === itemIndex)
            );
            if (basketIndex !== -1) {
                newBasket.splice(basketIndex, 1);
            } else {
                newBasket.pop(action.item);
            }

            return {
                ...state,
                basket: [...newBasket],
            };
        }
        case 'INCREASE_QTY': {
            const qtyIndex = action.item.index;
            const newQty = [...state.qty];
            newQty[qtyIndex]++;
            const newBasket = [...state.basket];
            newBasket.forEach(item => {
                item.qty = newQty[qtyIndex]
            })
            return {
                ...state,
                basket: [...newBasket],
                qty: [...newQty],
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
                qty: [...newQty],
            };
        }
        case 'REMOVE_FROM_BASKET':
            // Logic
            return { state };
        default:
            return state;
    }
};

export default reducer;
