import React from 'react';
import MinusIcon from '@material-ui/icons/Remove';
import PlusIcon from '@material-ui/icons/Add';
import { useStateValue } from '../StateProvider';
import { Spring } from 'react-spring/renderprops';
import { Link } from 'react-router-dom';
import ImageIcon from '@material-ui/icons/Image';

function ProductosLanding({
    image,
    name,
    unit,
    price,
    id,
    qty,
    index,
    description,
}) {
    const [
        { accountPath, restart },
        dispatch,
    ] = useStateValue();
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

    const addBasketAnimation = () => {
        dispatch({
            type: 'ADD_BASKET_ANIMATION',
        });
    }

    const removeBasketAnimation = () => {
        dispatch({
            type: 'REMOVE_BASKET_ANIMATION',
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
                    <div className="product" key={index}>
                        <div className="product__img__container">
                            <Link
                                to={`/accounts/${accountPath}/products/${name}`}
                            >
                                {image ? (
                                    <img
                                        onClick={setCurrentProduct}
                                        className="product__img"
                                        src={image}
                                        alt={name}
                                    />
                                ) : (
                                    <ImageIcon
                                        onClick={setCurrentProduct}
                                        className="product__image__icon"
                                    />
                                )}
                            </Link>
                        </div>

                        <div className="product__line"></div>

                        <div className="product__subcontainer">
                            <div className="product__description">
                                <Link
                                    to={`/accounts/${accountPath}/products/${name}`}
                                >
                                    <p
                                        onClick={setCurrentProduct}
                                        className="product__title"
                                    >
                                        {name}
                                    </p>
                                </Link>
                                <p className="product__unit">
                                    Unidad:{' '}
                                    {unit ? (
                                        <span>{unit}</span>
                                    ) : (
                                        <span>N/A</span>
                                    )}
                                </p>

                                {price ? (
                                    <p className="product__price">
                                        <span className="product__price__extra">
                                            $
                                        </span>
                                        {price}
                                        <span className="product__price__extra">
                                            {' '}
                                            por unidad
                                        </span>
                                    </p>
                                ) : (
                                    <div></div>
                                )}
                            </div>
                            <div className="product__buttons">
                                <div className="btn__quantity__box">
                                    <button
                                        onClick={decreaseQty}
                                        className="btn__quantity btn__control btn__decrease"
                                    >
                                        <MinusIcon className="minus__icon btn__quantity btn__control" />
                                    </button>
                                    <p className="product__quantity">
                                        {qty[index] ? qty[index] : 1}
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
                                    onMouseDown={addBasketAnimation}
                                    onMouseUp={removeBasketAnimation}
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

export default ProductosLanding;
