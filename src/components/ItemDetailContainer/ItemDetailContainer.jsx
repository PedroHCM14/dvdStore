import React, { useState } from "react";
import "./ItemDetailContainer.css";
import ItemList from "../ItemList/ItemList";
import ItemDetail from "../ItemDetail/ItemDetail";

function ItemDetailContainer(props) {
  const [selectedItem, setSelectedItem] = useState(null);

  const handleItemClick = (item) => {
    setSelectedItem(item);
  };

  return (
    <div>
      <ItemList onItemClick={handleItemClick} />
      {selectedItem && <ItemDetail item={selectedItem} />}
    </div>
  );
}

export default ItemDetailContainer;
