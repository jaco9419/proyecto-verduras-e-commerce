import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Landing from './Landing';

function App() {
    return (
        <Router>
            <div className="App">
                <Switch>
                    <Route path="/">
                        <Landing />
                    </Route>
                    <Route path="/productos"></Route>
                    <Route path="/pedidos"></Route>
                </Switch>
            </div>
            ;
        </Router>
    );
}

export default App;
