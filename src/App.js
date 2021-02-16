import React, { useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import { useStateValue } from './StateProvider';
import './App.css';
import Header from './Components/Header';
import Landing from './Screens/Landing';
import Pedidos from './Screens/Pedidos';

function App() {

    const API_URL = `https://us-central1-duleri-69cbb.cloudfunctions.net/api_quote_v2${window.location.pathname}`;

    const [{}, dispatch] = useStateValue();

    useEffect(() => {
        loadProducts();
    }, []);

    const loadUserInfo = async () => {
        const response = await fetch(API_URL);
        const data = await response.json();

        dispatch({
            type: 'PASS_USER_INFO',
            item: {
                data: data.result
            },
        });
    }

    const loadProducts = async () => {
        const response = await fetch(API_URL);
        const data = await response.json();

        dispatch({
            type: 'PASS_PRODUCTS',
            item: {
                data: data.result
            },
        });
    }

    return (
        <Router>
            <div className="App">
                <Switch>
                    <Route path="/accounts/:accountPath/pedidos">
                        <Header />
                        <Pedidos />
                    </Route>
                    <Route path="/accounts/:accountPath/products">
                        <Header />
                        <Landing />
                    </Route>
                </Switch>
            </div>
        </Router>
    );
}

export default App;
