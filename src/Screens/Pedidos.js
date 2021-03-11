import React from 'react';
import '../style/Pedidos.css';
import { useStateValue } from '../StateProvider';
import PedidosFormulario from '../Components/PedidosFormulario';
import ProductosPedidos from '../Components/ProductosPedidos';
import { Redirect } from 'react-router-dom';

function Pedidos() {
    const [{ basket, qtyBasket, accountPath }, ] = useStateValue();
    
    return (
        <div className="pedidos__container">
            {basket?.length === 0 && <Redirect to={`/accounts/${accountPath}/products`} />}
            <h2 className="pedidos__message">Confirmá tu Pedido:</h2>

            <div className="lista__pedidos__container">
                {/* Si no hay pedidos, se muestra mensaje; de lo contrario, aparecen los productos que estén en el carrito */}
                {basket.length === 0 ? (
                    <p className="sin__pedido">No tiene ningún pedido aún</p>
                ) : (
                    basket.map((order, i) => (
                        <ProductosPedidos 
                            order = {order}
                            image = {order.image}
                            name = {order.name}
                            unit = {order.unit}
                            price = {order.price}
                            qty = {qtyBasket[order.index]}
                            id = {order.id}
                            index = {order.index}
                            indexInBasket = {i}
                            key={i}
                            description={order.description}
                        />
                    ))
                )}
            </div>

            {/* Formulario para procesar el pedido */}

            <PedidosFormulario />

            <footer className="footer">
                <p>© Derechos reservados</p>
            </footer>
        </div>
    );
}

export default Pedidos;
