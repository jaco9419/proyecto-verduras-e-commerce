import React from 'react';
import MinusIcon from '@material-ui/icons/Remove';
import PlusIcon from '@material-ui/icons/Add';
import { useStateValue } from '../StateProvider';
import { Spring } from 'react-spring/renderprops';

function ProductosLanding({ src, name, unidad, precio, id, qty, index }) {
    const [, dispatch] = useStateValue();
    const addToBasket = () => {
        dispatch({
            type: 'ADD_TO_BASKET',
            item: {
                src,
                name,
                unidad,
                precio,
                id,
                qty: qty[index],
                index,
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

    return (
        <Spring
            from={{ opacity: 0, transform: 'translateX(-50px)' }}
            to={{ opacity: 1, transform: 'translateX(0px)' }}
            config={{ delay: index * 150, duration: 400 }}
        >
            {(props) => (
                <div style={props}>
                    <div className="product" key={index}>
                        <div className="product__img__container">
                            <img
                                className="product__img"
                                src={src}
                                alt={name}
                            />
                        </div>

                        <div className="product__line"></div>

                        <div className="product__subcontainer">
                            <div className="product__description">
                                <p className="product__title">{name}</p>
                                <p className="product__unit">
                                    Unidad:{' '}
                                    {precio ? (
                                        <span>{unidad}</span>
                                    ) : (
                                        <span>N/A</span>
                                    )}
                                </p>

                                {precio ? (
                                    <p className="product__price">
                                        <span className="product__price__extra">
                                            $
                                        </span>
                                        {precio}
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

export default ProductosLanding;
