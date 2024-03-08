import React from "react";
import "./ItemListContainer.css";

function ItemListContainer (props) {
    return (
        <div>
            <p>{props.message}</p>
        </div>
    );
}

export default ItemListContainer;