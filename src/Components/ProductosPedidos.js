import React from 'react';
import { Spring } from 'react-spring/renderprops';
import { useTransition } from 'react-spring';
import MinusIcon from '@material-ui/icons/Remove';
import PlusIcon from '@material-ui/icons/Add';
import { useStateValue } from '../StateProvider';

function ProductosPedidos({ pedido, src, name, unidad, precio, id, index }) {
    const [{ basket, qty }, dispatch] = useStateValue();

    const addToBasket = (pedido) => {
        dispatch({
            type: 'ADD_TO_BASKET',
            item: {
                src,
                name,
                unidad,
                precio,
                id,
                qty,
                index,
            },
        });
    };

    const increaseQty = (pedido) => {
        dispatch({
            type: 'INCREASE_QTY',
            item: {
                qty,
                index,
            },
        });
    };

    const decreaseQty = (pedido) => {
        dispatch({
            type: 'DECREASE_QTY',
            item: {
                qty,
                index,
            },
        });
    };

    const removeFromBasket = (pedidoIndex) => {
        dispatch({
            type: 'REMOVE_FROM_BASKET',
            item: {
                index: pedidoIndex,
            },
        });
    };

    return (
        <div>
            <Spring
                from={{ opacity: 0, transform: 'translateX(-50px)' }}
                to={{ opacity: 1, transform: 'translateX(0px)' }}
                config={{ delay: index * 150, duration: 400 }}
            >
                {(props) => (
                    <div style={props}>
                        <div className="pedido" key={index}>
                            <img className="pedido__img" src={src} alt={name} />
                            <div className="pedido__line"></div>

                            <div className="pedido__subcontainer">
                                <div className="pedido__description">
                                    <p className="pedido__title">{name}</p>
                                    <p className="pedido__unit">
                                        Unidad:{' '}
                                        {precio ? (
                                            <span>{unidad}</span>
                                        ) : (
                                            <span>sin especificar</span>
                                        )}
                                    </p>

                                    {precio ? (
                                        <p className="pedido__price">
                                            <span className="pedido__price__extra">
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

                                <div className="pedido__buttons">
                                    <div className="pedido__btn__quantity__box">
                                        <button
                                            onClick={() => decreaseQty(pedido)}
                                            className="btn__quantity pedido__btn__control btn__decrease"
                                        >
                                            <MinusIcon className="minus__icon btn__quantity pedido__btn__control" />
                                        </button>
                                        <p className="product__quantity">
                                            {qty[index]}
                                        </p>
                                        <button
                                            onClick={() => increaseQty(pedido)}
                                            className="pedido__btn__control btn__increase btn__quantity"
                                        >
                                            <PlusIcon className="plus__icon btn__quantity pedido__btn__control" />
                                        </button>
                                    </div>

                                    <button
                                        onClick={() => removeFromBasket(index)}
                                        className="btn__quantity btn__delete"
                                    >
                                        Borrar
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </Spring>
        </div>
    );
}

export default ProductosPedidos;
