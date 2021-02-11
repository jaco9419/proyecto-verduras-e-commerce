import React from 'react';
import '../style/Pedidos.css';
import { useStateValue } from '../StateProvider';
import PedidosFormulario from '../Components/PedidosFormulario';
import ProductosPedidos from '../Components/ProductosPedidos';

function Pedidos() {
    const [{ basket, qty }, dispatch] = useStateValue();
    
    return (
        <div className="pedidos__container">
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
                            title = {pedido.title}
                            unidad = {pedido.unidad}
                            precio = {pedido.precio}
                            qty = {qty[pedido.index]}
                            id = {pedido.id}
                            index = {i}
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
