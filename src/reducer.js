const str = window.location.pathname;
const accountPath = str.match(/(?<=accounts\/+).*?(?=\/)/gs) || str.match(/(?<=accounts\/+).*/gs);
//console.log(accountPath);

export const initialState = {
    products: [],
    basket: [],
    qty: [],
    accountPath,
    accountInfo: {},
    productsViewList: false 
};

const reducer = (state, action) => {
    
    switch (action.type) {
        case 'LOAD_USER_INFO':
            
            return {
                ...state,
                accountInfo: action.item.data
            }
        case 'LOAD_PRODUCTS':
            const dataLength = action.item.data ? action.item.data.length : 1;
            console.log(state.qty);
            return {
                ...state,
                products: action.item.data,
                qty: state.qty.length > 0 ? [...state.qty] : Array(dataLength).fill(5),
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
            console.log(state.qty);
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
            console.log(state.qty);
            return {
                ...state,
                qty: [...newQty],
            };
        }
        case 'TOGGLE_VIEW':
            return {
                ...state,
                productsViewList: !state.productsViewList
            }
        default:
            return state;
    }
};

export default reducer;
