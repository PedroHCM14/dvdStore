import React from 'react';
import './ItemListContainer.css';
import ItemCount from '../ItemCount/ItemCount';
import ItemList from '../ItemList/ItemList';

function ItemListContainer (props) {
    return (
        <div>
            <p>{props.message}</p>
            {/* <ItemCount stock={10} initial={1} /> */}
            <ItemList />
        </div>
    );
}

export default ItemListContainer;