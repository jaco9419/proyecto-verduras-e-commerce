import React from 'react';
import MinusIcon from '@material-ui/icons/Remove';
import PlusIcon from '@material-ui/icons/Add';
import { useStateValue } from './StateProvider';

function ProductosLanding({ src, title, unidad, precio, id, qty, index }) {
    const [{ basket }, dispatch] = useStateValue();

    const addToBasket = () => {
        dispatch({
            type: 'ADD_TO_BASKET',
            item: {
                src,
                title,
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
        <div className="product" key={id}>
            <img className="product__img" src={src} alt={title} />
            <div className="product__line"></div>

            <div className="product__subcontainer">
                <div className="product__description">
                    <p className="product__title">{title}</p>
                    <p className="product__unit">Unidad: {unidad}</p>

                    {precio ? (
                        <p className="product__price">
                            <span className="product__price__extra">$</span>
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
                        <p className="product__quantity">{qty[index]}</p>
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
    );
}

export default ProductosLanding;
