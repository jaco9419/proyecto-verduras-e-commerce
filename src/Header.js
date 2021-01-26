import React from 'react';
import { Link } from 'react-router-dom';
import './style/Header.css';
import HomeIcon from '@material-ui/icons/Home';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { useStateValue } from './StateProvider';

function Header() {

    const [{ basket }] = useStateValue();

    return (
        <header className="header">
            <div className="header__figure">
                <div className="header__skewed"></div>

                <Link to="/" className="header__link__icon">
                    <HomeIcon className="home__icon" />
                </Link>
            </div>

            <nav className="header__links">
                <Link to="/productos" className="header__link header__productos">
                    <p>Productos</p>
                </Link>
                <Link to="/pedidos" className="header__link">
                    <div className="header__pedidos">
                        <p>Pedidos</p>
                        <ShoppingCartIcon className="cart__icon" />
                        <div className="header__cart__number">
                            <p>{basket?.length}</p>
                        </div>
                    </div>
                </Link>
            </nav>
        </header>
    );
}

export default Header;
