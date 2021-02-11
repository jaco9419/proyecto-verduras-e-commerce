import React from 'react';
import '../style/PedidosFormulario.css';

function PedidosFormulario() {
    return (
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
    );
}

export default PedidosFormulario;
