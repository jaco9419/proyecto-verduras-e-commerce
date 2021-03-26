import React from 'react';
import { useStateValue } from '../StateProvider';
import '../style/PedidosFormulario.css';

const { REACT_APP_API_URL } = process.env;

function PedidosFormulario() {
    const [{ custumerInfo, accountName }, dispatch] = useStateValue();

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(custumerInfo);
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
        const API_URL = `${REACT_APP_API_URL}/data/${accountName}`;
        console.log(API_URL);
        const response = await fetch(API_URL, {
            method: 'post',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(custumerInfo),
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
                    name="name"
                    type="text"
                    placeholder="Nombre y apellido*"
                    className="pedidos__form__text"
                    onChange={handleInputChange}
                    value={custumerInfo.name}
                    required
                />
                
                <input
                    name="email"
                    type="email"
                    placeholder="Email*"
                    className="pedidos__form__text"
                    onChange={handleInputChange}
                    value={custumerInfo.email}
                    required
                />

                <input
                    name="phone"
                    type="tel"
                    placeholder="Celular*"
                    className="pedidos__form__text"
                    onChange={handleInputChange}
                    value={custumerInfo.phone}
                    required
                />

                <input
                    name="state"
                    type="text"
                    placeholder="Provincia*"
                    className="pedidos__form__text"
                    onChange={handleInputChange}
                    value={custumerInfo.state}
                    required
                />

                <input
                    name="city"
                    type="text"
                    placeholder="Ciudad*"
                    className="pedidos__form__text"
                    onChange={handleInputChange}
                    value={custumerInfo.city}
                    required
                />

                <input
                    name="deliveryAdress"
                    type="text"
                    placeholder="Dirección para recibir pedido*"
                    className="pedidos__form__text"
                    onChange={handleInputChange}
                    value={custumerInfo.deliveryAdress}
                    required
                />

                {/*<textarea
                    id="direccion"
                    name="detalles_direccion"
                    placeholder="Detalles dirección"
                    className="pedidos__form__text pedidos__form__textarea"
                    onChange={handleInputChange}
                    value={custumerInfo.detalles_direccion}
                ></textarea>*/}

                <input
                    name="zipCode"
                    type="text"
                    placeholder="CDP*"
                    className="pedidos__form__text"
                    onChange={handleInputChange}
                    value={custumerInfo.zipCode}
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
