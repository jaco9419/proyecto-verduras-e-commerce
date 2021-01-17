import React from 'react';
import { Link } from 'react-router-dom';
import './style/Header.css';
import HomeIcon from '@material-ui/icons/Home';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

function Header() {
    return (
        <nav className="header">
            <div className="header__figure">
                <div className="header__skewed"></div>

                <Link to="/" className="header__link__icon">
                    <HomeIcon className="home__icon" />
                </Link>
            </div>

            <div className="header__links">
                <Link to="/productos" className="header__link">
                    <p>Productos</p>
                </Link>
                <Link to="/pedidos" className="header__link">
                    <div className="header__pedidos">
                        <p>Pedidos</p>
                        <ShoppingCartIcon className="cart__icon" />
                        <div className="header__cart__number">
                            <p>0</p>
                        </div>
                    </div>
                </Link>
            </div>
        </nav>
    );
}

export default Header;
