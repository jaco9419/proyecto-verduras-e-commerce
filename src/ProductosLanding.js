import React from 'react';
import MinusIcon from '@material-ui/icons/Remove';
import PlusIcon from '@material-ui/icons/Add';
import { useStateValue } from './StateProvider';

function ProductosLanding({ src, title, key, unidad, precio }) {
    const [{ basket }, dispatch] = useStateValue();

    const addToBasket = () => {
        dispatch({
            type: 'ADD_TO_BASKET',
            item: {
                src,
                title,
                key,
                unidad,
                precio,
            },
        });
    };

    return (
        <div className="product" key={key}>
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
                        <button className="btn__quantity btn__control btn__decrease">
                            <MinusIcon className="minus__icon btn__quantity btn__control" />
                        </button>
                        <p className="product__quantity">3</p>
                        <button className="btn__control btn__increase btn__quantity">
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
