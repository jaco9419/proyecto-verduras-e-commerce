import React from 'react';
import '../style/Landing.css';
import SearchBar from '../Components/SearchBar';
//import data from './API/data';
import ProductosLanding from '../Components/ProductosLanding';
import { useStateValue } from '../StateProvider';

function Landing({ products }) {

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
            {/* Se obtienen los productos para la landing en base a los productos en API o BD */}
            
          {products.map((product, i) => (
          <ProductosLanding 
                src={product.src}
                title={product.title}
                unidad={product.unidad}
                precio={product.precio}
                id={product.id}
                qty={qty}
                index={i}
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
