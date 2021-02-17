import React, { useEffect } from 'react';
import '../style/Landing.css';
import SearchBar from '../Components/SearchBar';
import ProductosLanding from '../Components/ProductosLanding';
import { useStateValue } from '../StateProvider';
import ListViewIcon from '@material-ui/icons/ViewList';
import BoxViewIcon from '@material-ui/icons/Apps';
import ProductosLista from '../Components/ProductosLista';

function Landing() {
    const [{ products, qty, productsViewList }, dispatch] = useStateValue();

    useEffect(() => {
        loadProducts();
    }, []);

    const loadProducts = async () => {
        const API_URL = `https://us-central1-duleri-69cbb.cloudfunctions.net/api_quote_v2${window.location.pathname}`;
        const response = await fetch(API_URL);
        const data = await response.json();

        dispatch({
            type: 'LOAD_PRODUCTS',
            item: {
                data: data.result,
                qty: qty[products.index],
            },
        });
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
                {products ? (
                    products.map((product, index) =>
                        productsViewList === false ? (
                            <ProductosLanding
                                src={product.src}
                                name={product.name}
                                unidad={product.unidad}
                                price={product.price}
                                id={product.id}
                                qty={qty}
                                index={index}
                                key={index}
                                description={product.description}
                            />
                        ) : (
                            <ProductosLista
                                src={product.src}
                                name={product.name}
                                unidad={product.unidad}
                                price={product.price}
                                id={product.id}
                                qty={qty}
                                index={index}
                                key={index}
                                description={product.description}
                            />
                        )
                    )
                ) : (
                    <div className="landing__message__error">
                        <p>
                            Ha ocurrido un error. Por favor, refrescar la
                            página.
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
