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

const { REACT_APP_API_URL } = process.env;

function App() {
    const [
        { accountPath, accountName, qty, products, origin },
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
    };

    useEffect(() => {
        loadProducts();
    }, [accountName]);

    const loadProducts = async () => {
        const API_URL = `${REACT_APP_API_URL}/accounts/${accountName}/products?page=1&per_page=10`;
        const response = await fetch(API_URL);
        const data = await response.json();

        dispatch({
            type: 'LOAD_PRODUCTS',
            item: {
                data,
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
                        <Header />
                        <Landing />
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
