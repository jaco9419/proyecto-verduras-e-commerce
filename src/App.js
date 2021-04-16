import React, { useEffect } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect,
} from 'react-router-dom';
import { useStateValue } from './StateProvider';
import './App.css';
import Header from './Components/Header';
import Landing from './Screens/Landing';
import Pedidos from './Screens/Pedidos';
import ProductoDetalle from './Screens/ProductoDetalle';
import AccountNotFound from './Screens/AccountNotFound';

const { REACT_APP_API_URL } = process.env;

function App() {
    const [
        { accountPath, accountName, qty, products, origin, counter, productsPerPage, currentPage, isFirstLoad },
        dispatch,
    ] = useStateValue();

    useEffect(() => {
        loadAccountName();
    }, []);

    const loadAccountName = async () => {
        const API_URL = `${REACT_APP_API_URL}/accounts?quoteWebsite=${origin}`;
        const response = await fetch(API_URL);
        const data = await response.json();

        dispatch({
            type: 'LOAD_ACCOUNT_NAME',
            item: {
                data,
            },
        });

        await loadAccountInfo(data.accountName);
        await loadProducts(data.accountName);
    };

    const loadAccountInfo = async (account) => {
        const API_URL = `${REACT_APP_API_URL}/accounts/${account}`;
        const response = await fetch(API_URL);
        const data = await response.json();

        dispatch({
            type: 'LOAD_ACCOUNT_INFO',
            item: {
                data,
            },
        });
    };

    useEffect(() => {
        if (!isFirstLoad) {
            loadProducts(accountName);
        }
    }, [currentPage]);

    const loadProducts = async (account) => {
        const API_URL = `${REACT_APP_API_URL}/accounts/${account}/products?page=${currentPage}&per_page=${productsPerPage}`;
        const response = await fetch(API_URL);
        const data = await response.json();
        const numberProducts = response.headers.get('x-total-count');

        dispatch({
            type: 'LOAD_PRODUCTS',
            item: {
                data,
                numberProducts,
                qty: qty[products.index],
            },
        });
    };

    return (
        <Router>
            <div className="App">
                <Switch>
                    <Route path="/accounts/:accountPath/products/:product">
                        <Header />
                        <ProductoDetalle />
                    </Route>
                    <Route path="/accounts/:accountPath/pedidos">
                        <Header />
                        <Pedidos />
                    </Route>
                    <Route path="/accounts/:accountPath/products">
                        { accountName || counter - 2 > 0 ? (
                            <div>
                                <Header />
                                <Landing />
                            </div>
                        ) : (
                            <AccountNotFound />
                        )}
                    </Route>
                    <Route path="/accounts/:accountPath/">
                        <Redirect to={`/accounts/${accountPath}/products`} />
                    </Route>
                </Switch>
            </div>
        </Router>
    );
}

export default App;
