import React from "react";
import "./Item.css";
import { NavLink } from "react-router-dom";

function Item({ item, onClick }) {
  const { id, title, price, pictureUrl } = item;

  // const handleClick = () => {
  //   onClick(item);
  // };

  return (
        <div className="product">
          <img src={pictureUrl} alt={title} />
          <p>{title}</p>
          <h2>R$ {price}</h2>
          <NavLink to={"/item/${item.id}"}>Ver Produto</NavLink>
        </div>
  );
}

export default Item;
