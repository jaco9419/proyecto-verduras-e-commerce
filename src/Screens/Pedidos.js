import React from 'react';
import '../style/Pedidos.css';
import { useStateValue } from '../StateProvider';
import PedidosFormulario from '../Components/PedidosFormulario';
import ProductosPedidos from '../Components/ProductosPedidos';
import { Redirect } from 'react-router-dom';

function Pedidos() {
    const [{ basket, qty, accountPath }, ] = useStateValue();
    
    return (
        <div className="pedidos__container">
            {basket?.length === 0 && <Redirect to={`/accounts/${accountPath}/products`} />}
            <h2 className="pedidos__message">Confirmá tu Pedido:</h2>

            <div className="lista__pedidos__container">
                {/* Si no hay pedidos, se muestra mensaje; de lo contrario, aparecen los productos que estén en el carrito */}
                {basket.length === 0 ? (
                    <p className="sin__pedido">No tiene ningún pedido aún</p>
                ) : (
                    basket.map((pedido, i) => (
                        <ProductosPedidos 
                            pedido = {pedido}
                            src = {pedido.src}
                            name = {pedido.name}
                            unidad = {pedido.unidad}
                            price = {pedido.price}
                            qty = {qty[pedido.index]}
                            id = {pedido.id}
                            index = {pedido.index}
                            indexInBasket = {i}
                            key={i}
                            description={pedido.description}
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
