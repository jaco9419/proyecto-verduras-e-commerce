const path = window.location.pathname;

const accountPath =
    path.match(/(?<=accounts\/+).*?(?=\/)/gs) ||
    path.match(/(?<=accounts\/+).*/gs);

const href = window.location.href;

const newHref = href
    .replace('/products', '')
    .replace('/products/', '')
    .replace('/pedido', '')
    .replace('/pedido/', '')
    .replace(`${accountPath}/`, `${accountPath}`);
const origin = newHref.replaceAll(':', '%3A').replaceAll('/', '%2F');

export const initialState = {
    products: [],
    basket: [],
    qty: [],
    qtyBasket: [],
    accountName: {},
    accountPath,
    accountInfo: {},
    origin,
    productsViewList: false,
    mobilePhone: "11",
    custumerInfo: {},
    currentProduct: [],
    searchWord: '',
    counter: 7,
    isSearching: false,
    phoneCode: "54",
};

const reducer = (state, action) => {
    switch (action.type) {
        case 'LOAD_ACCOUNT_NAME':
            return {
                ...state,
                accountName: action.item.data[0],
            };
        case 'LOAD_ACCOUNT_INFO':
            return {
                ...state,
                accountInfo: action.item.data,
            };
        case 'LOAD_PRODUCTS':
            const dataLength = action.item.data ? action.item.data.length : 1;
            return {
                ...state,
                products: action.item.data,
                qty:
                    state.qty.length > 1
                        ? [...state.qty]
                        : Array(dataLength).fill(1),
            };
        case 'ADD_TO_BASKET': {
            const itemName = action.item.name;
            const newBasket = [...state.basket];
            const newQty = [...state.qtyBasket];
            const basketIndex = newBasket.indexOf(
                newBasket.find((element) => element.name === itemName)
            );
            if (basketIndex !== -1) {
                newBasket.splice(basketIndex, 1, action.item);
                newQty.splice(basketIndex, 1, action.item.qty);
            } else {
                newBasket.push(action.item);
                newQty.push(action.item.qty);
            }
            return {
                ...state,
                basket: [...newBasket],
                qtyBasket: [...newQty],
            };
        }
        case 'REMOVE_FROM_BASKET': {
            const itemName = action.item.name;
            const newBasket = [...state.basket];
            const newQty = [...state.qtyBasket];
            const basketIndex = newBasket.indexOf(
                newBasket.find((element) => element.name === itemName)
            );
            console.log(basketIndex);
            if (basketIndex !== -1) {
                newBasket.splice(basketIndex, 1);
                newQty.splice(basketIndex, 1);
            } else {
                newBasket.pop();
                newQty.pop();
            }
            return {
                ...state,
                basket: [...newBasket],
                qtyBasket: [...newQty],
            };
        }
        case 'INCREASE_QTY': {
            const qtyIndex = action.item.index;
            const newQty = [...state.qty];
            newQty[qtyIndex]++;
            return {
                ...state,
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
        case 'INCREASE_QTY_BASKET': {
            const qtyIndex = action.item.index;
            const newQty = [...state.qtyBasket];
            newQty[qtyIndex]++;
            const newBasket = [...state.basket];
            newBasket[qtyIndex].qty = newQty[qtyIndex];
            return {
                ...state,
                basket: [...newBasket],
                qtyBasket: [...newQty],
            };
        }
        case 'DECREASE_QTY_BASKET': {
            const qtyIndex = action.item.index;
            const newQty = [...state.qtyBasket];
            if (newQty[qtyIndex] > 1) {
                newQty[qtyIndex]--;
            }
            const newBasket = [...state.basket];
            newBasket[qtyIndex].qty = newQty[qtyIndex];
            return {
                ...state,
                basket: [...newBasket],
                qtyBasket: [...newQty],
            };
        }
        case 'TOGGLE_VIEW':
            return {
                ...state,
                productsViewList: !state.productsViewList,
            };
        case 'HANDLE_INPUT_CHANGE':
            switch (action.item.targetName) {
                case 'name':
                    return {
                        ...state,
                        custumerInfo: {
                            ...state.custumerInfo,
                            basket: [...state.basket],
                            name: action.item.targetValue,
                        },
                    };
                case 'email':
                    return {
                        ...state,
                        custumerInfo: {
                            ...state.custumerInfo,
                            basket: [...state.basket],
                            email: action.item.targetValue,
                        },
                    };
                case 'phoneCode':
                    return {
                        ...state,
                        phoneCode: action.item.targetValue,
                    };
                case 'mobilePhone':
                    const completeMobilePhone = state.phoneCode + "9" + action.item.targetValue;
                    const incompleteMobilePhone = action.item.targetValue;
                    return {
                        ...state,
                        mobilePhone: incompleteMobilePhone,
                        custumerInfo: {
                            ...state.custumerInfo,
                            basket: [...state.basket],
                            mobilePhone: completeMobilePhone,
                        },
                    };
                case 'state':
                    return {
                        ...state,
                        custumerInfo: {
                            ...state.custumerInfo,
                            basket: [...state.basket],
                            state: action.item.targetValue,
                        },
                    };
                case 'city':
                    return {
                        ...state,
                        custumerInfo: {
                            ...state.custumerInfo,
                            basket: [...state.basket],
                            city: action.item.targetValue,
                        },
                    };
                case 'deliveryAdress':
                    return {
                        ...state,
                        custumerInfo: {
                            ...state.custumerInfo,
                            basket: [...state.basket],
                            deliveryAdress: action.item.targetValue,
                        },
                    };
                case 'zipCode':
                    return {
                        ...state,
                        custumerInfo: {
                            ...state.custumerInfo,
                            basket: [...state.basket],
                            zipCode: action.item.targetValue,
                        },
                    };
                default:
                    return state;
            }
        case 'SET_CURRENT_PRODUCT':
            return {
                ...state,
                currentProduct: action.item,
            };
        case 'SEARCH_PRODUCT':
            return {
                ...state,
                searchWord: action.item.value,
            };
        case 'LOAD_SEARCHED_PRODUCTS':
            const dataLengthy = action.item.data ? action.item.data.length : 1;
            const filteredProducts = action.item.data;
            return {
                ...state,
                products: filteredProducts,
                qty: Array(dataLengthy).fill(1),
                isSearching: true,
            };
        case 'DECREASE_COUNTER':
            let counter = state.counter;
            if (counter > 0) {
                counter--;
            }
            return {
                ...state,
                counter,
            };
        default:
            return state;
    }
};

export default reducer;
