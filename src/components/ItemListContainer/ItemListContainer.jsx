import React from 'react';
import './ItemListContainer.css';
import ItemCount from '../ItemCount/ItemCount';

function ItemListContainer (props) {
    return (
        <div>
            <p>{props.message}</p>
            <ItemCount stock={10} initial={1} />
        </div>
    );
}

export default ItemListContainer;