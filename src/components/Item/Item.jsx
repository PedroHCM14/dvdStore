import React from "react";
import "./Item.css";

function Item({ item, onClick }) {
  const { id, title, price, pictureUrl } = item;

  return (
    <div className="product" onClick={() => onClick(item)}>
      <img src={pictureUrl} alt={title} />
      <p>{title}</p>
      <h2>{price}</h2>
    </div>
  );
}

export default Item;
