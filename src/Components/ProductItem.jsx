import React from 'react';
import '../Styles/productItem.css'

function ProductItem({ producto }) {
  return (
    <div className="product-item">
      <img src={producto.imagen} alt={producto.nombre} />
      <h3>{producto.nombre}</h3>
      <p>Precio: ${producto.precio}</p>
      <p>Valor: ${producto.valor}</p>
    </div>
  );
}

export default ProductItem;
