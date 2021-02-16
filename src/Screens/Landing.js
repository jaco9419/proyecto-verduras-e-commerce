import React from 'react';
import '../style/Landing.css';
import SearchBar from '../Components/SearchBar';
import ProductosLanding from '../Components/ProductosLanding';
import { useStateValue } from '../StateProvider';

function Landing() {
    const [{ products, qty }] = useStateValue();

    return (
        <div className="landing">
            <div className="landing__message">
                <p>
                    Encontrá las verduras y frutas más frescas y hacé tu pedido
                </p>
            </div>
            <SearchBar />
            <div className="products__container">
                {/* Se obtienen los productos para la landing en base a los productos en API o BD */}

                {products ? (
                    products.map((product, index) => (
                        <ProductosLanding
                            src={product.src}
                            name={product.name}
                            unidad={product.unidad}
                            precio={product.precio}
                            id={product.id}
                            qty={qty}
                            index={index}
                            key={index}
                        />
                    ))
                ) : (
                    <div className="landing__message__error">
                        <p>
                            Ha ocurrido un error. Por favor, refrescar la
                            página.
                        </p>
                    </div>
                )}
            </div>

            <footer className="footer">
                <p>© Derechos reservados</p>
            </footer>
        </div>
    );
}

export default Landing;
