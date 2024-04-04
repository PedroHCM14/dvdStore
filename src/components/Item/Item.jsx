import React from "react";
import "./Item.css";

function Item({ item, onClick }) {
  const { id, title, price, pictureUrl } = item;

  const handleClick = () => {
    onClick(item);
  };

  return (
    <div className="product" onClick={handleClick}>
      <img src={pictureUrl} alt={title} />
      <p>{title}</p>
      <h2>R$ {price}</h2>
    </div>
  );
}

export default Item;
