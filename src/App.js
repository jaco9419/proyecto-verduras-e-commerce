import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Header from './Header';
import Landing from './Landing';
import Pedidos from './Pedidos';
import ProductosLista from './ProductosLista';

function App() {
    return (
        <Router>
            <div className="App">
                <Switch>
                    <Route path="/pedidos">
                        <Header />
                        <Pedidos />
                    </Route>
                    <Route path="/productos">
                        <Header />
                        <ProductosLista />
                    </Route>
                    <Route path="/">
                        <Header />
                        <Landing />
                    </Route>
                </Switch>
            </div>
        </Router>
    );
}

export default App;
