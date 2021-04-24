import React from 'react';
import MinusIcon from '@material-ui/icons/Remove';
import PlusIcon from '@material-ui/icons/Add';
import { useStateValue } from '../StateProvider';
import { Spring } from 'react-spring/renderprops';
import '../style/ProductosLista.css';
import { Link } from 'react-router-dom';

function ProductosLista({
    image,
    name,
    unit,
    price,
    id,
    qty,
    index,
    description,
}) {
    const [{ accountPath, restart }, dispatch] = useStateValue();
    const addToBasket = () => {
        dispatch({
            type: 'ADD_TO_BASKET',
            item: {
                image,
                name,
                unit,
                price,
                id,
                qty: qty[index],
                index,
                description,
            },
        });
    };

    const increaseQty = () => {
        dispatch({
            type: 'INCREASE_QTY',
            item: {
                qty: qty[index],
                index,
            },
        });
    };

    const decreaseQty = () => {
        dispatch({
            type: 'DECREASE_QTY',
            item: {
                qty: qty[index],
                index,
            },
        });
    };

    const setCurrentProduct = () => {
        dispatch({
            type: 'SET_CURRENT_PRODUCT',
            item: {
                image,
                name,
                unit,
                price,
                id,
                qty: qty[index],
                index,
                description,
            },
        });
    };

    const restartAnimation = () => {
        dispatch({
            type: 'RESTART_ANIMATION_OFF',
        });
    };

    return (
        <Spring
            reset={restart}
            onRest={restartAnimation}
            from={{ opacity: 0, transform: 'translateX(-50px)' }}
            to={{ opacity: 1, transform: 'translateX(0px)' }}
            config={{ delay: index * 150, duration: 400 }}
        >
            {(props) => (
                <div style={props}>
                    <div
                        className={
                            index % 2 === 0
                                ? 'product__list even'
                                : 'product__list odd'
                        }
                        key={index}
                    >
                        <div className="product__subcontainer__list">
                            <div className="product__description__list">
                                <Link
                                    to={`/accounts/${accountPath}/products/${name}`}
                                >
                                    <p
                                        onClick={setCurrentProduct}
                                        className="product__title__list"
                                    >
                                        {name}
                                    </p>
                                </Link>

                                <p className="product__unit__list">
                                    Unidad:{' '}
                                    {unit ? (
                                        <span>{unit}</span>
                                    ) : (
                                        <span>N/A</span>
                                    )}
                                </p>

                                {price ? (
                                    <p className="product__price__list">
                                        <span className="product__price__extra__list">
                                            $
                                        </span>
                                        {price}
                                        <span className="product__price__extra__list">
                                            {' '}
                                            por unidad
                                        </span>
                                    </p>
                                ) : (
                                    <div></div>
                                )}
                            </div>
                            <div className="product__buttons__list">
                                <div className="btn__quantity__box">
                                    <button
                                        onClick={decreaseQty}
                                        className="btn__quantity btn__control btn__decrease"
                                    >
                                        <MinusIcon className="minus__icon btn__quantity btn__control" />
                                    </button>
                                    <p className="product__quantity">
                                        {qty[index]}
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
                                    className="btn__quantity btn__add"
                                >
                                    Agregar
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </Spring>
    );
}

export default ProductosLista;
