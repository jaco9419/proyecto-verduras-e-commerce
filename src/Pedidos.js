import React from 'react';
import './style/Pedidos.css';
import data from './API/data';
import MinusIcon from '@material-ui/icons/Remove';
import PlusIcon from '@material-ui/icons/Add';

function Pedidos() {
    return (
        <div className="pedidos__container" >
            <h2 className="pedidos__message">Confirmá tu Pedido:</h2>
            <div className="lista__pedidos__container">

                <div className="pedido" key={data[0].id}>
                    <img
                        className="pedido__img"
                        src={data[0].src}
                        alt={data[0].title}
                    />
                    <div className="pedido__line"></div>

                    <div className="pedido__subcontainer">
                        <div className="pedido__description">
                            <p className="pedido__title">{data[0].title}</p>
                            <p className="pedido__unit">
                                Unidad: {data[0].unidad}
                            </p>

                            {data[0].precio ? (
                                <p className="pedido__price">
                                    <span className="pedido__price__extra">
                                        $
                                    </span>
                                    {data[0].precio}
                                    <span className="product__price__extra">
                                        {' '}
                                        por unidad
                                    </span>
                                </p>
                            ) : (
                                <div></div>
                            )}
                        </div>

                        <div className="pedido__buttons">

                            <div className="pedido__btn__quantity__box">
                                <button
                                    className="btn__quantity pedido__btn__control btn__decrease"
                                >
                                    <MinusIcon className="minus__icon btn__quantity pedido__btn__control" />
                                </button>
                                <p className="product__quantity">2</p>
                                <button
                                    className="pedido__btn__control btn__increase btn__quantity"
                                >
                                    <PlusIcon className="plus__icon btn__quantity pedido__btn__control" />
                                </button>
                            </div>

                            <button className="btn__quantity btn__delete">
                                Borrar
                            </button>
                        </div>
                    </div>
                </div>

                
                <div className="pedido" key={data[0].id}>
                    <img
                        className="pedido__img"
                        src={data[0].src}
                        alt={data[0].title}
                    />
                    <div className="pedido__line"></div>

                    <div className="pedido__subcontainer">
                        <div className="pedido__description">
                            <p className="pedido__title">{data[0].title}</p>
                            <p className="pedido__unit">
                                Unidad: {data[0].unidad}
                            </p>

                            {data[0].precio ? (
                                <p className="pedido__price">
                                    <span className="pedido__price__extra">
                                        $
                                    </span>
                                    {data[0].precio}
                                    <span className="product__price__extra">
                                        {' '}
                                        por unidad
                                    </span>
                                </p>
                            ) : (
                                <div></div>
                            )}
                        </div>

                        <div className="pedido__buttons">

                            <div className="pedido__btn__quantity__box">
                                <button
                                    className="btn__quantity pedido__btn__control btn__decrease"
                                >
                                    <MinusIcon className="minus__icon btn__quantity pedido__btn__control" />
                                </button>
                                <p className="product__quantity">2</p>
                                <button
                                    className="pedido__btn__control btn__increase btn__quantity"
                                >
                                    <PlusIcon className="plus__icon btn__quantity pedido__btn__control" />
                                </button>
                            </div>

                            <button className="btn__quantity btn__delete">
                                Borrar
                            </button>
                        </div>
                    </div>
                </div>

                <div className="pedido" key={data[0].id}>
                    <img
                        className="pedido__img"
                        src={data[0].src}
                        alt={data[0].title}
                    />
                    <div className="pedido__line"></div>

                    <div className="pedido__subcontainer">
                        <div className="pedido__description">
                            <p className="pedido__title">{data[0].title}</p>
                            <p className="pedido__unit">
                                Unidad: {data[0].unidad}
                            </p>

                            {data[0].precio ? (
                                <p className="pedido__price">
                                    <span className="pedido__price__extra">
                                        $
                                    </span>
                                    {data[0].precio}
                                    <span className="product__price__extra">
                                        {' '}
                                        por unidad
                                    </span>
                                </p>
                            ) : (
                                <div></div>
                            )}
                        </div>

                        <div className="pedido__buttons">

                            <div className="pedido__btn__quantity__box">
                                <button
                                    className="btn__quantity pedido__btn__control btn__decrease"
                                >
                                    <MinusIcon className="minus__icon btn__quantity pedido__btn__control" />
                                </button>
                                <p className="product__quantity">2</p>
                                <button
                                    className="pedido__btn__control btn__increase btn__quantity"
                                >
                                    <PlusIcon className="plus__icon btn__quantity pedido__btn__control" />
                                </button>
                            </div>

                            <button className="btn__quantity btn__delete">
                                Borrar
                            </button>
                        </div>
                    </div>
                </div>

                <div className="pedido" key={data[0].id}>
                    <img
                        className="pedido__img"
                        src={data[0].src}
                        alt={data[0].title}
                    />
                    <div className="pedido__line"></div>

                    <div className="pedido__subcontainer">
                        <div className="pedido__description">
                            <p className="pedido__title">{data[0].title}</p>
                            <p className="pedido__unit">
                                Unidad: {data[0].unidad}
                            </p>

                            {data[0].precio ? (
                                <p className="pedido__price">
                                    <span className="pedido__price__extra">
                                        $
                                    </span>
                                    {data[0].precio}
                                    <span className="product__price__extra">
                                        {' '}
                                        por unidad
                                    </span>
                                </p>
                            ) : (
                                <div></div>
                            )}
                        </div>

                        <div className="pedido__buttons">

                            <div className="pedido__btn__quantity__box">
                                <button
                                    className="btn__quantity pedido__btn__control btn__decrease"
                                >
                                    <MinusIcon className="minus__icon btn__quantity pedido__btn__control" />
                                </button>
                                <p className="product__quantity">2</p>
                                <button
                                    className="pedido__btn__control btn__increase btn__quantity"
                                >
                                    <PlusIcon className="plus__icon btn__quantity pedido__btn__control" />
                                </button>
                            </div>

                            <button className="btn__quantity btn__delete">
                                Borrar
                            </button>
                        </div>
                    </div>
                </div>

                <div className="pedido" key={data[0].id}>
                    <img
                        className="pedido__img"
                        src={data[0].src}
                        alt={data[0].title}
                    />
                    <div className="pedido__line"></div>

                    <div className="pedido__subcontainer">
                        <div className="pedido__description">
                            <p className="pedido__title">{data[0].title}</p>
                            <p className="pedido__unit">
                                Unidad: {data[0].unidad}
                            </p>

                            {data[0].precio ? (
                                <p className="pedido__price">
                                    <span className="pedido__price__extra">
                                        $
                                    </span>
                                    {data[0].precio}
                                    <span className="product__price__extra">
                                        {' '}
                                        por unidad
                                    </span>
                                </p>
                            ) : (
                                <div></div>
                            )}
                        </div>

                        <div className="pedido__buttons">

                            <div className="pedido__btn__quantity__box">
                                <button
                                    className="btn__quantity pedido__btn__control btn__decrease"
                                >
                                    <MinusIcon className="minus__icon btn__quantity pedido__btn__control" />
                                </button>
                                <p className="product__quantity">2</p>
                                <button
                                    className="pedido__btn__control btn__increase btn__quantity"
                                >
                                    <PlusIcon className="plus__icon btn__quantity pedido__btn__control" />
                                </button>
                            </div>

                            <button className="btn__quantity btn__delete">
                                Borrar
                            </button>
                        </div>
                    </div>
                </div>


            </div>

            <div className="pedidos__form__container">
                <form className="pedidos__form">
                    <h3 class="pedidos__form__message">Registrá tus datos</h3>
                        <input name="nombre" type="text" placeholder="Nombre*" class="pedidos__form__text"/>

                        <input name="apellido" type="text" placeholder="Apellido*" class="pedidos__form__text"/>
                        
                        <input name="mail" type="email" placeholder="Correo*" class="pedidos__form__text"/>

                        <input name="telefono" type="tel" placeholder="Teléfono*" class="pedidos__form__text"/>

                        <input name="provincia" type="text" placeholder="Provincia*" class="pedidos__form__text"/>

                        <input name="ciudad" type="text" placeholder="Ciudad*" class="pedidos__form__text"/>

                        <input name="direccion" type="text" placeholder="Dirección*" class="pedidos__form__text"/>

                        <textarea id="direccion" name="direccion" placeholder="Detalles dirección" class="pedidos__form__text"></textarea>

                        <input name="CDP" type="text" placeholder="CDP*" class="pedidos__form__text"/>
                        
                        
                    
                    <button class="btn">Sign Up</button>
                </form>

                
            </div>
            
            <footer className="footer">
                <p>© Derechos reservados</p>
            </footer>                    
        </div>
    );
}

export default Pedidos;
