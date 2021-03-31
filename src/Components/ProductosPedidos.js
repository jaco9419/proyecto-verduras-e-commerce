import React from 'react';
import { Spring } from 'react-spring/renderprops';
import MinusIcon from '@material-ui/icons/Remove';
import PlusIcon from '@material-ui/icons/Add';
import { useStateValue } from '../StateProvider';
import ImageIcon from '@material-ui/icons/Image';

function ProductosPedidos({
    order,
    image,
    name,
    unit,
    price,
    id,
    index,
    indexInBasket,
    description,
}) {
    const [{ qtyBasket }, dispatch] = useStateValue();

    const increaseQty = (order) => {
        dispatch({
            type: 'INCREASE_QTY_BASKET',
            item: {
                qty: qtyBasket,
                index: indexInBasket,
            },
        });
    };

    const decreaseQty = (order) => {
        dispatch({
            type: 'DECREASE_QTY_BASKET',
            item: {
                qty: qtyBasket,
                index: indexInBasket,
            },
        });
    };

    const removeFromBasket = (orderIndex) => {
        dispatch({
            type: 'REMOVE_FROM_BASKET',
            item: {
                name,
                index: indexInBasket,
            },
        });
    };

    return (
        <div>
            <Spring
                from={{ opacity: 0, transform: 'translateX(-50px)' }}
                to={{ opacity: 1, transform: 'translateX(0px)' }}
                config={{ delay: indexInBasket * 150, duration: 400 }}
            >
                {(props) => (
                    <div style={props}>
                        <div className="pedido" key={indexInBasket}>
                            {image ? (
                                <img
                                    className="pedido__img"
                                    src={image}
                                    alt={name}
                                />
                            ) : (
                                <ImageIcon className="pedido__image__icon" />
                            )}

                            <div className="pedido__line"></div>

                            <div className="pedido__subcontainer">
                                <div className="pedido__description">
                                    <p className="pedido__title">{name}</p>
                                    <p className="pedido__unit">
                                        Unidad:{' '}
                                        {unit ? (
                                            <span>{unit}</span>
                                        ) : (
                                            <span>N/A</span>
                                        )}
                                    </p>

                                    {price ? (
                                        <p className="pedido__price">
                                            <span className="pedido__price__extra">
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

                                <div className="pedido__buttons">
                                    <div className="pedido__btn__quantity__box">
                                        <button
                                            onClick={() => decreaseQty(order)}
                                            className="btn__quantity pedido__btn__control btn__decrease"
                                        >
                                            <MinusIcon className="minus__icon btn__quantity pedido__btn__control" />
                                        </button>
                                        <p className="product__quantity">
                                            {qtyBasket[indexInBasket]}
                                        </p>
                                        <button
                                            onClick={() => increaseQty(order)}
                                            className="pedido__btn__control btn__increase btn__quantity"
                                        >
                                            <PlusIcon className="plus__icon btn__quantity pedido__btn__control" />
                                        </button>
                                    </div>

                                    <button
                                        onClick={() => removeFromBasket(indexInBasket)}
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
