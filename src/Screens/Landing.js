import React, { useEffect } from 'react';
import '../style/Landing.css';
import SearchBar from '../Components/SearchBar';
import ProductosLanding from '../Components/ProductosLanding';
import { useStateValue } from '../StateProvider';
import ListViewIcon from '@material-ui/icons/ViewList';
import BoxViewIcon from '@material-ui/icons/Apps';
import ProductosLista from '../Components/ProductosLista';

const { REACT_APP_API_URL } = process.env;

function Landing() {
    const [
        { products, qty, productsViewList, accountName, counter },
        dispatch,
    ] = useStateValue();

    useEffect(() => {
        loadUserInfo();
    }, [accountName]);

    const loadUserInfo = async () => {
        const API_URL = `${REACT_APP_API_URL}/accounts/${accountName}`;
        const response = await fetch(API_URL);
        const data = await response.json();

        dispatch({
            type: 'LOAD_ACCOUNT_INFO',
            item: {
                data,
            },
        });
    };

    useEffect(() => {
        decreaseCounter();
    }, []);

    const decreaseCounter = () => {
        setTimeout(() => {
            dispatch({
                type: 'DECREASE_COUNTER',
            });
            decreaseCounter();
        }, 1000);
    };

    const toggleProductsView = () => {
        dispatch({
            type: 'TOGGLE_VIEW',
        });
    };

    return (
        <div className="landing">
            <div className="landing__message">
                <p>
                    Encontrá las verduras y frutas más frescas y hacé tu pedido
                </p>
            </div>

            <SearchBar />
            <div
                onClick={() => toggleProductsView()}
                className="products__view"
            >
                <BoxViewIcon className="products__view__icon" />
                <ListViewIcon className="products__view__icon" />

                <div
                    className={
                        productsViewList === false
                            ? 'products__view__line move__left'
                            : 'products__view__line move__right'
                    }
                ></div>
            </div>

            <div
                className={
                    productsViewList === false
                        ? 'products__container'
                        : 'products__container__list'
                }
            >
                {products[0]?.name || products[0]?.image ? (
                    products.map((product, index) =>
                        productsViewList === false ? (
                            <ProductosLanding
                                image={product.image}
                                name={product.name}
                                unit={product.unit}
                                price={product.price}
                                id={product.id}
                                qty={qty}
                                index={index}
                                key={index}
                                description={product.description}
                            />
                        ) : (
                            <ProductosLista
                                image={product.image}
                                name={product.name}
                                unit={product.unit}
                                price={product.price}
                                id={product.id}
                                qty={qty}
                                index={index}
                                key={index}
                                description={product.description}
                            />
                        )
                    )
                ) : counter > 0 ? (
                    <div className="landing__message__error">
                        <p>Cargando productos...</p>
                    </div>
                ) : (
                    <div className="landing__message__error">
                        <p>
                            No hay productos en esta cuenta. Por favor,
                            verifique la página e intente de nuevo.
                        </p>
                    </div>
                )}
            </div>

            <footer className="footer">
                <p>© Derechos reservados</p>
            </footer>
        </div>
    );
}

export default Landing;
