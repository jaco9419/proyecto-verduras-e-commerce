import React, { useEffect } from 'react';
import '../style/Landing.css';
import SearchBar from '../Components/SearchBar';
import ProductosLanding from '../Components/ProductosLanding';
import { useStateValue } from '../StateProvider';
import ListViewIcon from '@material-ui/icons/ViewList';
import BoxViewIcon from '@material-ui/icons/Apps';
import ProductosLista from '../Components/ProductosLista';
import Pagination from '../Components/Pagination';

function Landing() {
    const [
        { products, qty, productsViewList, counter, isSearching },
        dispatch,
    ] = useStateValue();

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
                    Lista de productos
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
                {products?.length > 0 ? (
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
                ) : !isSearching ? (
                    <div className="landing__message__error">
                        <p>
                            No existen productos en esta cuenta.
                        </p>
                    </div>
                ) : (
                    <div className="landing__message__error">
                        <p>
                            El producto que busca no existe. Por favor, intente
                            la búsqueda de nuevo.
                        </p>
                    </div>
                )}
            </div>

            <Pagination />

            <footer className="footer">
                <p>© Derechos reservados</p>
            </footer>
        </div>
    );
}

export default Landing;
