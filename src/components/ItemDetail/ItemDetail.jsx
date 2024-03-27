import React from "react";
import "./ItemDetail.css";
import ItemCount from "../ItemCount/ItemCount";

function ItemDetail ({item}) {
    const {id, title, price, pictureUrl} = item;

    return (
        <div>
            <img src={picture} alt={title} />
            <p>ID:{id}</p>
            <p>{title}</p>
            <h2>{price}</h2>
            <ItemCount />
        </div>
    );
}

export default ItemDetail;