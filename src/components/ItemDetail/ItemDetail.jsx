import React from "react";
import "./ItemDetail.css";

function ItemDetail ({item}) {
    const {id, title, price, pictureUrl} = item;

    return (
        <div>
            <img src={picture} alt={title} />
            <p>ID:{id}</p>
            <p>{title}</p>
            <h2>{price}</h2>
        </div>
    );
}

export default ItemDetail;