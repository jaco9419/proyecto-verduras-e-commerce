import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../style/Header.css';
import HomeIcon from '@material-ui/icons/Home';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { useStateValue } from '../StateProvider';

function Header({ loadData }) {

    const [
        { basket, accountPath, accountInfo, animateBasket }
    ] = useStateValue();

    return (
        <header className="header">
            <nav className="header__figure">
                <div className="header__skewed"></div>

                <Link
                    to={`/accounts/${accountPath}/products`}
                    className="header__link__icon"
                >
                    {accountInfo.logo ? (
                        <img
                            className="home__logo"
                            src={accountInfo.logo}
                            alt="logo"
                        />
                    ) : (
                        <HomeIcon className="home__icon" />
                    )}
                </Link>
            </nav>

            <nav className="header__links">
                <Link
                    to={`/accounts/${accountPath}/pedidos`}
                    className="header__link"
                >
                    <div className="header__pedidos">
                        <p>Pedidos</p>
                        <ShoppingCartIcon className="cart__icon" />
                        <div
                            className={`header__cart__number ${animateBasket && 'animate__basket'}`}
                        >
                            <p>{basket?.length}</p>
                        </div>
                    </div>
                </Link>
            </nav>
        </header>
    );
}

export default Header;
