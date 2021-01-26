import React from 'react';
import './style/Landing.css';
import SearchBar from './SearchBar';
import data from './API/data';
import MinusIcon from '@material-ui/icons/Remove';
import PlusIcon from '@material-ui/icons/Add';

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
                                <div className="product__buttons">
                                    <div className="btn__quantity__box">
                                        <button className="btn__quantity btn__control btn__decrease"><MinusIcon className="minus__icon btn__quantity btn__control"/></button>
                                        <p className="product__quantity">3</p>
                                        <button className="btn__control btn__increase btn__quantity"><PlusIcon className="plus__icon btn__quantity btn__control"/></button>
                                    </div>
                                    <button className="btn__quantity btn__add">Agregar</button>
                                </div>
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
