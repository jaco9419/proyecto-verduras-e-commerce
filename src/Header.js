import React from 'react';
import { Link } from 'react-router-dom';
import './style/Header.css';
import HomeIcon from '@material-ui/icons/Home';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';

function Header() {
    return (
        <nav className="header">
            <div className="header__figure">
                <div className="header__skewed"></div>

                <Link to="/productos" className="header__link__icon">
                    <HomeIcon className="header__icon" />
                </Link>

                

            </div>

            <Link to="/productos" className="header__link">
                    <p>Productos</p>
            </Link>
        </nav>
    );
}

export default Header;
