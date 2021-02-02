import React from 'react';
import './style/Pedidos.css';
import MinusIcon from '@material-ui/icons/Remove';
import PlusIcon from '@material-ui/icons/Add';
import { useStateValue } from './StateProvider';
import { Spring } from 'react-spring/renderprops';
import { useTransition } from 'react-spring';

function Pedidos() {
    const [{ basket, qty }, dispatch] = useStateValue();
    
    const addToBasket = (pedido) => {
        dispatch({
            type: 'ADD_TO_BASKET',
            item: {
                src: pedido.src,
                title: pedido.title,
                unidad: pedido.unidad,
                precio: pedido.precio,
                id: pedido.id,
                qty: qty[pedido.index],
                index: pedido.index,
            },
        });
    };

    const increaseQty = (pedido) => {
        dispatch({
            type: 'INCREASE_QTY',
            item: {
                qty: qty[pedido.index],
                index: pedido.index,
            },
        });

        addToBasket(pedido);
        console.log(basket)
    };

    const decreaseQty = (pedido) => {
        dispatch({
            type: 'DECREASE_QTY',
            item: {
                qty: pedido.qty,
                index: pedido.index,
            },
        });

        addToBasket(pedido);
    };

    const removeFromBasket = (pedidoIndex) => {
        dispatch({
            type: 'REMOVE_FROM_BASKET',
            item: {
                index: pedidoIndex,
            },
        });
    };

    const transition = useTransition(basket, item => item.index, {
        from: { opacity: 0, transform: "translateY(-10px)" },
        enter: { opacity: 1, transform: "translateY(0)" },
        leave: { opacity: 0, transform: "translateY(10px)" }
      });

    return (
        <div className="pedidos__container">
            <h2 className="pedidos__message">Confirmá tu Pedido:</h2>

            <div className="lista__pedidos__container">
                {/* Si no hay pedidos, se muestra mensaje; de lo contrario, aparecen los productos que estén en el carrito */}
                {basket.length === 0 ? (
                    <p className="sin__pedido">No tiene ningún pedido aún</p>
                ) : (
                    basket.map((pedido, i) => (
                        <Spring
                            from={{ opacity: 0, transform: 'translateX(-50px)' }}
                            to={{ opacity: 1, transform: 'translateX(0px)' }}
                            config={{ delay: i * 150, duration: 400 }}
                        >
                        {props => (
                            <div style={props}>
                            <div className="pedido" key={i}>
                            <img
                                className="pedido__img"
                                src={pedido.src}
                                alt={pedido.title}
                            />
                            <div className="pedido__line"></div>

                            <div className="pedido__subcontainer">
                                <div className="pedido__description">
                                    <p className="pedido__title">
                                        {pedido.title}
                                    </p>
                                    <p className="pedido__unit">
                                        Unidad: {pedido.unidad}
                                    </p>

                                    {pedido.precio ? (
                                        <p className="pedido__price">
                                            <span className="pedido__price__extra">
                                                $
                                            </span>
                                            {pedido.precio}
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
                                        <button onClick={() => decreaseQty(pedido)} className="btn__quantity pedido__btn__control btn__decrease">
                                            <MinusIcon className="minus__icon btn__quantity pedido__btn__control" />
                                        </button>
                                        <p className="product__quantity">
                                            {qty[pedido.index]}
                                        </p>
                                        <button onClick={() => increaseQty(pedido)} className="pedido__btn__control btn__increase btn__quantity">
                                            <PlusIcon className="plus__icon btn__quantity pedido__btn__control" />
                                        </button>
                                    </div>

                                    <button onClick={() => removeFromBasket(pedido.index)} className="btn__quantity btn__delete">
                                        Borrar
                                    </button>
                                </div>
                            </div>
                        </div>
                            </div>
                            )}
                        </Spring>
                        
                    ))
                )}
            </div>

            {/* Formulario para procesar el pedido */}

            <div className="pedidos__form__container">
                <form className="pedidos__form">
                    <h3 className="pedidos__form__message">Registrá tus datos</h3>
                    <input
                        name="nombre"
                        type="text"
                        placeholder="Nombre*"
                        className="pedidos__form__text"
                        required
                    />

                    <input
                        name="apellido"
                        type="text"
                        placeholder="Apellido*"
                        className="pedidos__form__text"
                        required
                    />

                    <input
                        name="mail"
                        type="email"
                        placeholder="Correo*"
                        className="pedidos__form__text"
                        required
                    />

                    <input
                        name="telefono"
                        type="tel"
                        placeholder="Teléfono*"
                        className="pedidos__form__text"
                        required
                    />

                    <input
                        name="provincia"
                        type="text"
                        placeholder="Provincia*"
                        className="pedidos__form__text"
                        required
                    />

                    <input
                        name="ciudad"
                        type="text"
                        placeholder="Ciudad*"
                        className="pedidos__form__text"
                        required
                    />

                    <input
                        name="direccion"
                        type="text"
                        placeholder="Dirección para recibir pedido*"
                        className="pedidos__form__text"
                        required
                    />

                    <textarea
                        id="direccion"
                        name="direccion"
                        placeholder="Detalles dirección"
                        className="pedidos__form__text pedidos__form__textarea"
                    ></textarea>

                    <input
                        name="CDP"
                        type="text"
                        placeholder="CDP*"
                        className="pedidos__form__text"
                        required
                    />

                    <button type="submit" className="btn__confirmar">
                        Confirmar pedido
                    </button>
                </form>
            </div>

            <footer className="footer">
                <p>© Derechos reservados</p>
            </footer>
        </div>
    );
}

export default Pedidos;
