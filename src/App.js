import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { useStateValue } from './StateProvider';
import './App.css';
import Header from './Components/Header';
import Landing from './Screens/Landing';
import Pedidos from './Screens/Pedidos';

function App() {

    const API_URL = `https://proyecto-verduras-api.herokuapp.com${window.location.pathname}`;

    const [ products, setProducts ] = useState([]);
    const [{ basket }, dispatch] = useStateValue();

    useEffect(() => {
        loadData();
        dispatch({
            type: 'PASS_DATA',
            item: {
                data: products
            },
        });
    }, []);

    const loadData = async () => {
        const response = await fetch(API_URL);
        const data = await response.json();
        setProducts(data);
    }

    return (
        <Router>
            <div className="App">
                <Switch>
                    <Route path="/accounts/:accountPath/pedidos">
                        <Header />
                        <Pedidos />
                    </Route>
                    <Route path="/accounts/:accountPath">
                        <Header />
                        <Landing products={products} />
                    </Route>
                </Switch>
            </div>
        </Router>
    );
}

export default App;
