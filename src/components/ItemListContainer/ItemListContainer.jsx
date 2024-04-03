import React from 'react';
import './ItemListContainer.css';
import ItemList from '../ItemList/ItemList';

function ItemListContainer (props) {
    return (
        <div>
            <p>{props.message}</p>
            <ItemList />
        </div>
    );
}

export default ItemListContainer;