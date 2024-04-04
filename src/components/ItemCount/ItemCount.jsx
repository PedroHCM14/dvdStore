import React, { useState } from 'react';
import './ItemCount.css';

function ItemCount({ stock, initial }) {
  const [quantity, setQuantity] = useState(parseInt(initial) || 1);

  const Increase = () => {
    if (quantity < stock) {
      setQuantity((prevQuantity) => prevQuantity + 1);
    }
  };

  const Decrease = () => {
    if (quantity > 1) {
      setQuantity((prevQuantity) => prevQuantity - 1);
    }
  };

  return (
    <div>
      <button>Adicionar ao Carrinho</button>
      <div>
        <button onClick={Decrease}>-</button>
        <span>{quantity}</span>
        <button onClick={Increase}>+</button>
      </div>
    </div>
  );
}
export default ItemCount;
