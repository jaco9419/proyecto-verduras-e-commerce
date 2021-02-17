const str = window.location.pathname;
const accountPath =
    str.match(/(?<=accounts\/+).*?(?=\/)/gs) ||
    str.match(/(?<=accounts\/+).*/gs);
//console.log(accountPath);

export const initialState = {
    products: [],
    basket: [],
    qty: [],
    accountPath,
    accountInfo: {},
    productsViewList: false,
    custumerInfo: {},
};

const reducer = (state, action) => {
    switch (action.type) {
        case 'LOAD_USER_INFO':
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
                    state.qty.length > 0
                        ? [...state.qty]
                        : Array(dataLength).fill(5),
            };
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
            newBasket.forEach((item) => {
                item.qty = newQty[qtyIndex];
            });
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
        case 'TOGGLE_VIEW':
            return {
                ...state,
                productsViewList: !state.productsViewList,
            };
        case 'HANDLE_INPUT_CHANGE':
            switch (action.item.targetName) {
                case 'nombre':
                    return {
                        ...state,
                        custumerInfo: {
                            ...state.custumerInfo,
                            basket: [...state.basket],
                            nombre: action.item.targetValue,
                        },
                    };
                case 'apellido':
                    return {
                        ...state,
                        custumerInfo: {
                            ...state.custumerInfo,
                            basket: [...state.basket],
                            apellido: action.item.targetValue,
                        },
                    };
                case 'mail':
                    return {
                        ...state,
                        custumerInfo: {
                            ...state.custumerInfo,
                            basket: [...state.basket],
                            mail: action.item.targetValue,
                        },
                    };
                case 'telefono':
                    return {
                        ...state,
                        custumerInfo: {
                            ...state.custumerInfo,
                            basket: [...state.basket],
                            telefono: action.item.targetValue,
                        },
                    };
                case 'provincia':
                    return {
                        ...state,
                        custumerInfo: {
                            ...state.custumerInfo,
                            basket: [...state.basket],
                            provincia: action.item.targetValue,
                        },
                    };
                case 'ciudad':
                    return {
                        ...state,
                        custumerInfo: {
                            ...state.custumerInfo,
                            basket: [...state.basket],
                            ciudad: action.item.targetValue,
                        },
                    };
                case 'direccion':
                    return {
                        ...state,
                        custumerInfo: {
                            ...state.custumerInfo,
                            basket: [...state.basket],
                            direccion: action.item.targetValue,
                        },
                    };
                case 'detalles_direccion':
                    return {
                        ...state,
                        custumerInfo: {
                            ...state.custumerInfo,
                            basket: [...state.basket],
                            detalles_direccion: action.item.targetValue,
                        },
                    };
                case 'CDP':
                    return {
                        ...state,
                        custumerInfo: {
                            ...state.custumerInfo,
                            basket: [...state.basket],
                            CDP: action.item.targetValue,
                        },
                    };
                default:
                    return state;
            }
        default:
            return state;
    }
};

export default reducer;
