import React from 'react';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import ErrorOutlineIcon from '@material-ui/icons/ErrorOutline';
import '../style/PostQuoteResponse.css';
import { useStateValue } from '../StateProvider';
import Loading from './Loading';

function PostQuoteResponse() {
    const [{ postQuoteOk }, dispatch] = useStateValue();

    const backToLanding = () => {
        dispatch({
            type: 'CLOSE_QUOTE_RESPONSE_OK',
        });
    };

    const backPostQuote = () => {
        dispatch({
            type: 'CLOSE_QUOTE_RESPONSE_ERROR',
        });
    };

    return (
        <div className="post__quote__container">
            {/* Muestra rueda de carga */}
            {postQuoteOk !== true && postQuoteOk !== false && <Loading />}

            {/* Mensaje de éxito */}
            {postQuoteOk === true && (
                <div className="post__quote__modal">
                    <p className="post__quote__modal__text">
                        ¡Su pedido se ha realizado exitosamente!
                    </p>
                    <CheckCircleIcon className="success__icon" />
                    <button
                        className="post__quote__btn"
                        onClick={backToLanding}
                    >
                        Salir
                    </button>
                </div>
            )}

            {/* Mensaje de error */}
            {postQuoteOk === false && (
                <div className="post__quote__modal">
                    <p className="post__quote__modal__text">
                        ¡Hubo un error al enviar su pedido!
                    </p>
                    <ErrorOutlineIcon className="failure__icon" />
                    <button
                        className="post__quote__btn"
                        onClick={backPostQuote}
                    >
                        Volver
                    </button>
                </div>
            )}
        </div>
    );
}

export default PostQuoteResponse;
