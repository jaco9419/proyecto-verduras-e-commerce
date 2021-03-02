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

function App() {
    const [{ accountPath, accountName, qty, products }, dispatch] = useStateValue();

    useEffect(() => {
        loadUserName();
    }, []);

    const loadUserName = async () => {
        const API_URL = `https://us-central1-duleri-69cbb.cloudfunctions.net/api_quote_v2/quoteWebsite?quoteWebsite=https%3A%2F%2Fproyecto-verduras-e-commerce.web.app%2Faccounts%2F${accountPath}`;
        const response = await fetch(API_URL);
        const data = await response.json();

        dispatch({
            type: 'LOAD_USER_NAME',
            item: {
                data,
            },
        });
    };

    useEffect(() => {
        loadProducts();
}, [accountName]);

const loadProducts = async () => {
    const API_URL = `https://us-central1-duleri-69cbb.cloudfunctions.net/api_quote_v2/accounts/${accountName}/products`;
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
