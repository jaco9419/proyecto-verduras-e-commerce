import React from 'react';
import './style/Landing.css';
import SearchBar from './SearchBar';

function Landing() {
    return (
        <div className="landing">
            <div className="landing__message">
                <p>Encontrá las verduras y frutas más frescas y hacé tu pedido</p>
            </div>
            <SearchBar />
            <div className="products__container">

                

                <div className="product">
                    <img
                        className="product__img"
                        src="https://http2.mlstatic.com/D_NQ_NP_996465-MLA41827779757_052020-V.webp"
                        alt="tomates"
                    />
                    <div className="product__line"></div>

                    <div className="product__subcontainer">
                        <div className="product__description">
                            <p className="product__title">Tomates Redondos</p>
                            <p className="Product__unit">Unidad: cajas</p>
                        </div>
                        <div className="product__buttons"></div>
                    </div>
                </div>

                <div className="product">
                    <img
                        className="product__img"
                        src="https://http2.mlstatic.com/D_NQ_NP_996465-MLA41827779757_052020-V.webp"
                        alt="tomates"
                    />
                    <div className="product__line"></div>

                    <div className="product__subcontainer">
                        <div className="product__description">
                            <p className="product__title">Tomates Redondos</p>
                            <p className="Product__unit">Unidad: cajas</p>
                        </div>
                        <div className="product__buttons"></div>
                    </div>
                </div>

                <div className="product">
                    <img
                        className="product__img"
                        src="https://http2.mlstatic.com/D_NQ_NP_996465-MLA41827779757_052020-V.webp"
                        alt="tomates"
                    />
                    <div className="product__line"></div>

                    <div className="product__subcontainer">
                        <div className="product__description">
                            <p className="product__title">Tomates Redondos</p>
                            <p className="Product__unit">Unidad: cajas</p>
                        </div>
                        <div className="product__buttons"></div>
                    </div>
                </div>


                <div className="product">
                    <img
                        className="product__img"
                        src="https://http2.mlstatic.com/D_NQ_NP_996465-MLA41827779757_052020-V.webp"
                        alt="tomates"
                    />

                    <div className="product__line"></div>

                    <div className="product__subcontainer">
                        <div className="product__description">
                            <p className="product__title">Tomates Redondos</p>
                            <p className="Product__unit">Unidad: cajas</p>
                        </div>
                        <div className="product__buttons"></div>
                    </div>
                </div>

                <div className="product">
                    <img
                        className="product__img"
                        src="https://http2.mlstatic.com/D_NQ_NP_996465-MLA41827779757_052020-V.webp"
                        alt="tomates"
                    />

                    <div className="product__line"></div>

                    <div className="product__subcontainer">
                        <div className="product__description">
                            <p className="product__title">Tomates Redondos</p>
                            <p className="Product__unit">Unidad: cajas</p>
                        </div>
                        <div className="product__buttons"></div>
                    </div>
                </div>

                <div className="product">
                    <img
                        className="product__img"
                        src="https://http2.mlstatic.com/D_NQ_NP_996465-MLA41827779757_052020-V.webp"
                        alt="tomates"
                    />

                    <div className="product__line"></div>

                    <div className="product__subcontainer">
                        <div className="product__description">
                            <p className="product__title">Tomates Redondos</p>
                            <p className="Product__unit">Unidad: cajas</p>
                        </div>
                        <div className="product__buttons"></div>
                    </div>
                </div>
            </div>

            <footer className="footer">
                <p>© Derechos reservados</p>
            </footer>
        </div>
    );
}

export default Landing;
