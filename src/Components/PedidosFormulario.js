import React from 'react';
import { useStateValue } from '../StateProvider';
import '../style/PedidosFormulario.css';
import ReCAPTCHA from "react-google-recaptcha";

const { REACT_APP_API_URL, REACT_APP_RECAPTCHA_SITE_KEY } = process.env;

function PedidosFormulario() {
    const [
        { custumerInfo, accountName, mobilePhone, isAPerson },
        dispatch,
    ] = useStateValue();

    const handleSubmit = (event) => {
        event.preventDefault();
        if (isAPerson) {
            postQuote();
            openQuoteResponse();
        }        
    };

    const handleRecaptchaChange = (value) => {
        console.log("Captcha value:", value);
        if (value) {
            dispatch({
                type: 'VERIFY_RECAPTCHA',
            });
        }
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

    const postQuote = async () => {
        const API_URL = `${REACT_APP_API_URL}/data?accountName=${accountName}`;
        const response = await fetch(API_URL, {
            method: 'post',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(custumerInfo),
        });
        const data = await response.json();
        dispatch({
            type: 'POST_QUOTE_RESPONSE',
            item: {
                data,
            },
        });
        
    };

    const openQuoteResponse = () => {
        dispatch({
            type: 'OPEN_QUOTE_RESPONSE',
        });
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

                <div className="pedidos__form__phone__container">
                    <select
                        name="phoneCode"
                        className="pedidos__form__prefix"
                        onChange={handleInputChange}
                        required
                    >
                        <option value="54">AR +54</option>
                    </select>

                    <input
                        name="mobilePhone"
                        type="tel"
                        placeholder="Ej: 11 1234 5678"
                        maxLength="10"
                        minLength="10"
                        className="pedidos__form__phone"
                        value={mobilePhone}
                        onChange={handleInputChange}
                        required
                    />
                </div>

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

                <input
                    name="zipCode"
                    type="text"
                    placeholder="CDP*"
                    className="pedidos__form__text"
                    onChange={handleInputChange}
                    value={custumerInfo.zipCode}
                    required
                />

                <ReCAPTCHA
                    sitekey={REACT_APP_RECAPTCHA_SITE_KEY}
                    onChange={handleRecaptchaChange}
                    style={{marginTop: '1rem',}}
                />

                <button type="submit" className="btn__confirmar">
                    Confirmar pedido
                </button>
            </form>
        </div>
    );
}

export default PedidosFormulario;
