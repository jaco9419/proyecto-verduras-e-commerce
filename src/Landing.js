import React from 'react';
import './style/Landing.css';
import SearchBar from './SearchBar';
import data from './API/data';
import ProductosLanding from './ProductosLanding';

function Landing() {
    return (
        <div className="landing">
            <div className="landing__message">
                <p>
                    Encontrá las verduras y frutas más frescas y hacé tu pedido
                </p>
            </div>
            <SearchBar />
            <div className="products__container">
            {data.map((product, i) => (
                <ProductosLanding 
                    src={product.src}
                    title={product.title}
                    key={i}
                    unidad={product.unidad}
                    precio={product.precio}
                />
            ))}
            </div>

            <footer className="footer">
                <p>© Derechos reservados</p>
            </footer>
        </div>
    );
}

export default Landing;
