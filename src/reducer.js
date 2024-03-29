const path = window.location.pathname;

const accountPath =
    path.match(/(?<=accounts\/+).*?(?=\/)/gs) ||
    path.match(/(?<=accounts\/+).*/gs);

const href = window.location.href;

const newHref = href
    .replace(`${accountPath}/products`, `${accountPath}`)
    .replace(`${accountPath}/products/`, `${accountPath}`)
    .replace(`${accountPath}/pedidos`, `${accountPath}`)
    .replace(`${accountPath}/pedidos/`, `${accountPath}`)
    .replace(`${accountPath}/`, `${accountPath}`);

const origin = newHref.replaceAll(':', '%3A').replaceAll('/', '%2F');

export const initialState = {
    products: [],
    numberProducts: 0,
    productsPerPage: 10,
    currentPage: 1,
    pagesArray: [],
    isFirstLoad: true,
    basket: [],
    qty: [],
    qtyBasket: [],
    accountName: {},
    accountPath,
    accountInfo: {},
    origin,
    productsViewList: false,
    custumerInfo: {},
    postQuoteOk: '',
    isAPerson: false,
    isQuoteResponseOpen: false,
    currentProduct: [],
    searchWord: '',
    isSearching: false,
    phoneCode: '54',
    restart: false,
    animateBasket: false,
};

const reducer = (state, action) => {
    switch (action.type) {
        case 'RESTART_ANIMATION':
            return {
                ...state,
                restart: true,
            };
        case 'RESTART_ANIMATION_OFF':
            return {
                ...state,
                restart: false,
            };
        case 'LOAD_ACCOUNT_NAME':
            return {
                ...state,
                accountName: action.item.data.accountName,
            };
        case 'LOAD_ACCOUNT_NAME_OK':
            return {
                ...state,
                accountNameOk: action.item.data.ok,
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
                numberProducts: action.item.numberProducts,
                qty:
                    state.qty.length > 1
                        ? [...state.qty]
                        : Array(dataLength).fill(1),
            };
        case 'LOAD_PRODUCTS_OK':
            return {
                ...state,
                products: [],
                numberProducts: 0,
                productsOk: action.item.data.ok,
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
        case 'POST_QUOTE_RESPONSE':
            return {
                ...state,
                postQuoteOk: action.item.data.ok,
            };
        case 'VERIFY_RECAPTCHA':
            return {
                ...state,
                isAPerson: true,
            };
        case 'CLOSE_QUOTE_RESPONSE_OK':
            return {
                ...state,
                basket: [],
                qtyBasket: [],
                custumerInfo: {},
                postQuoteOk: '',
                isQuoteResponseOpen: false,
                isAPerson: false,
            };
        case 'CLOSE_QUOTE_RESPONSE_ERROR':
            return {
                ...state,
                postQuoteOk: '',
                isQuoteResponseOpen: false,
                isAPerson: true,
            };
        case 'OPEN_QUOTE_RESPONSE':
            return {
                ...state,
                isQuoteResponseOpen: true,
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
                    const completeMobilePhone =
                        state.phoneCode + '9' + action.item.targetValue;
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
                numberProducts: action.item.numberProducts,
                qty: Array(dataLengthy).fill(1),
                isSearching: true,
                currentPage: 1,
                restart: true,
            };
        case 'LOAD_SEARCHED_PRODUCTS_OK':
            return {
                ...state,
                products: [],
                numberProducts: 0,
                searchOk: action.item.data.ok,
            };
        case 'SET_PAGE':
            return {
                ...state,
                qty: Array(state.productsPerPage).fill(1),
                isFirstLoad: false,
                currentPage: action.item.page,
                restart: true,
            };
        case 'PREVIOUS_PAGE':
            let previousPage = state.currentPage;
            if (previousPage > 1) {
                previousPage--;
            }
            return {
                ...state,
                qty: Array(state.productsPerPage).fill(1),
                isFirstLoad: false,
                currentPage: previousPage,
                restart: true,
            };
        case 'NEXT_PAGE':
            let nextPage = state.currentPage;
            const numberPages = Math.ceil(
                state.numberProducts / state.productsPerPage
            );
            if (nextPage < numberPages) {
                nextPage++;
            }
            return {
                ...state,
                qty: Array(state.productsPerPage).fill(1),
                isFirstLoad: false,
                currentPage: nextPage,
                restart: true,
            };
        case 'ADD_BASKET_ANIMATION':
            return {
                ...state,
                animateBasket: true,
            };
        case 'REMOVE_BASKET_ANIMATION':
            return {
                ...state,
                animateBasket: false,
            };
        default:
            return state;
    }
};

export default reducer;
