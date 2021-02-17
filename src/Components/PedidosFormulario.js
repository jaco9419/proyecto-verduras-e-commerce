import React from 'react';
import { useStateValue } from '../StateProvider';
import '../style/PedidosFormulario.css';

function PedidosFormulario() {
    const [{ custumerInfo, accountPath}, dispatch] = useStateValue();

    const handleSubmit = (event) => {
        event.preventDefault();
        loadUserInfo();
    };

    const handleInputChange = (event) => {
        event.preventDefault();
        dispatch({
            type: 'HANDLE_INPUT_CHANGE',
            item: {
                targetName: event.target.name,
                targetValue: event.target.value,
                [event.target.name]: event.target.value,
            },
        });
    };

    const loadUserInfo = async () => {
        const API_URL = `https://us-central1-duleri-69cbb.cloudfunctions.net/api_quote_v2/accounts/${accountPath}/quotes`;
        console.log(API_URL)
        const response = await fetch(API_URL, {
            method: 'post',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(custumerInfo)
        });
        console.log(response);
    };

    return (
        <div className="pedidos__form__container">
            <form
                method="POST"
                className="pedidos__form"
                onSubmit={handleSubmit}
            >
                <h3 className="pedidos__form__message">Registrá tus datos</h3>
                <input
                    name="nombre"
                    type="text"
                    placeholder="Nombre*"
                    className="pedidos__form__text"
                    onChange={handleInputChange}
                    value={custumerInfo.nombre}
                    required
                />

                <input
                    name="apellido"
                    type="text"
                    placeholder="Apellido*"
                    className="pedidos__form__text"
                    onChange={handleInputChange}
                    value={custumerInfo.apellido}
                    required
                />

                <input
                    name="mail"
                    type="email"
                    placeholder="Correo*"
                    className="pedidos__form__text"
                    onChange={handleInputChange}
                    value={custumerInfo.mail}
                    required
                />

                <input
                    name="telefono"
                    type="tel"
                    placeholder="Teléfono*"
                    className="pedidos__form__text"
                    onChange={handleInputChange}
                    value={custumerInfo.telefono}
                    required
                />

                <input
                    name="provincia"
                    type="text"
                    placeholder="Provincia*"
                    className="pedidos__form__text"
                    onChange={handleInputChange}
                    value={custumerInfo.provincia}
                    required
                />

                <input
                    name="ciudad"
                    type="text"
                    placeholder="Ciudad*"
                    className="pedidos__form__text"
                    onChange={handleInputChange}
                    value={custumerInfo.ciudad}
                    required
                />

                <input
                    name="direccion"
                    type="text"
                    placeholder="Dirección para recibir pedido*"
                    className="pedidos__form__text"
                    onChange={handleInputChange}
                    value={custumerInfo.direccion}
                    required
                />

                <textarea
                    id="direccion"
                    name="detalles_direccion"
                    placeholder="Detalles dirección"
                    className="pedidos__form__text pedidos__form__textarea"
                    onChange={handleInputChange}
                    value={custumerInfo.detalles_direccion}
                ></textarea>

                <input
                    name="CDP"
                    type="text"
                    placeholder="CDP*"
                    className="pedidos__form__text"
                    onChange={handleInputChange}
                    value={custumerInfo.CDP}
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
