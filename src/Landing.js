import React from 'react';
import './style/Landing.css';
import SearchBar from './SearchBar';
import data from './API/data';
import ProductosLanding from './ProductosLanding';
import { useStateValue } from './StateProvider';

function Landing() {

    const [{ qty }] = useStateValue();

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
                    unidad={product.unidad}
                    precio={product.precio}
                    id={product.id}
                    qty={qty}
                    key={i}
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
