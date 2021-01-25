import React from 'react';
import './style/Landing.css';
import SearchBar from './SearchBar';
import data from './API/data';

function Landing() {
    return (
        <div className="landing">
            <div className="landing__message">
                <p>Encontrá las verduras y frutas más frescas y hacé tu pedido</p>
            </div>
            <SearchBar />
            <div className="products__container">

                {
                    data.map((product, i) => (
                        <div className="product" key={i}>
                            <img
                                className="product__img"
                                src={product.src}
                                alt={product.title}
                            />
                            <div className="product__line"></div>

                            <div className="product__subcontainer">
                                <div className="product__description">
                                    <p className="product__title">{product.title}</p>
                                    <p className="product__unit">Unidad: {product.unidad}</p>
                                </div>
                                <div className="product__buttons"></div>
                            </div>
                        </div>
                    ))
                }
                
                

                
            </div>

            <footer className="footer">
                <p>© Derechos reservados</p>
            </footer>
        </div>
    );
}

export default Landing;
