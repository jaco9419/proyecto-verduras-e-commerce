import React from 'react';
import { Redirect } from 'react-router-dom';
import { useStateValue } from '../StateProvider';
import MinusIcon from '@material-ui/icons/Remove';
import PlusIcon from '@material-ui/icons/Add';
import '../style/ProductoDetalle.css';

function ProductoDetalle() {
    const [{ products, accountPath, currentProduct, qty }, dispatch ] = useStateValue();

    const addToBasket = () => {
        dispatch({
            type: 'ADD_TO_BASKET',
            item: {
                src: currentProduct.src,
                name: currentProduct.name,
                unidad: currentProduct.unidad,
                price: currentProduct.price,
                id: currentProduct.id,
                qty: qty[currentProduct.index],
                index: currentProduct.index,
                description: currentProduct.description,
            },
        });
    };

    const increaseQty = () => {
        dispatch({
            type: 'INCREASE_QTY',
            item: {
                qty: qty[currentProduct.index],
                index: currentProduct.index,
            },
        });
    };

    const decreaseQty = () => {
        dispatch({
            type: 'DECREASE_QTY',
            item: {
                qty: qty[currentProduct.index],
                index: currentProduct.index,
            },
        });
    };

    return <div>
    {products?.length === 0 && <Redirect to={`/accounts/${accountPath}/products`} />}
    <div>
                    <div className="product__detalle" key={currentProduct.index}>
                        <div className="product__img__container__detalle">
                            <img
                                className="product__img__detalle"
                                src={currentProduct.src}
                                alt={currentProduct.name}
                            />
                        </div>

                        <div className="product__line__detalle"></div>

                        <div className="product__subcontainer__detalle">
                            <div className="product__description__detalle">
                                <p className="product__title__detalle">{currentProduct.name}</p>
                                <p className="product__unit__detalle">
                                    Unidad:{' '}
                                    {currentProduct.unidad ? (
                                        <span>{currentProduct.unidad}</span>
                                    ) : (
                                        <span>N/A</span>
                                    )}
                                </p>

                                {currentProduct.price ? (
                                    <p className="product__price__detalle">
                                        <span className="product__price__extra__detalle">
                                            $
                                        </span>
                                        {currentProduct.price}
                                        <span className="product__price__extra__detalle">
                                            {' '}
                                            por unidad
                                        </span>
                                    </p>
                                ) : (
                                    <div></div>
                                )}
                                <p className="product__description__text__detalle"><strong>Descripción: </strong>{currentProduct.description}</p>
                            </div>
                            <div className="product__buttons__detalle">
                                <div className="btn__quantity__box">
                                    <button
                                        onClick={decreaseQty}
                                        className="btn__quantity btn__control btn__decrease"
                                    >
                                        <MinusIcon className="minus__icon btn__quantity btn__control" />
                                    </button>
                                    <p className="product__quantity">
                                        {qty[currentProduct.index]}
                                    </p>
                                    <button
                                        onClick={increaseQty}
                                        className="btn__control btn__increase btn__quantity"
                                    >
                                        <PlusIcon className="plus__icon btn__quantity btn__control" />
                                    </button>
                                </div>
                                <button
                                    onClick={addToBasket}
                                    className="btn__quantity btn__add__detalle"
                                >
                                    Agregar
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
    </div>;
}

export default ProductoDetalle;
