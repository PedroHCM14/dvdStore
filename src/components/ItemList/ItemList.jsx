import React, { useState, useEffect } from "react";
import Item from "../Item/Item";
import "./ItemList.css";
import ItemDetail from "../ItemDetail/ItemDetail";

const ItemList = () => {
  const [items, setItems] = useState([]);
  const [selectedItem, setSelectedItem] = useState(null);

  useEffect(() => {
    const Data = () => {
      setTimeout(() => {
        const fetchedItems = [
          {
            id: 1,
            title: "Blu-Ray Matrix: Resurrections",
            stock: 20,
            price: "69.90",
            pictureUrl:
              "https://cdn.awsli.com.br/600x700/1181/1181256/produto/145939328a083b4754d.jpg",
          },
          {
            id: 2,
            title: "Blu-Ray Elvis",
            stock: 30,
            price: "79.90",
            pictureUrl:
              "https://cdn.awsli.com.br/600x700/1181/1181256/produto/171872281d111d29e92.jpg",
          },
          {
            id: 3,
            title: "Blu-Ray Anônimo",
            stock: 50,
            price: "59.90",
            pictureUrl:
              "https://cdn.awsli.com.br/600x700/1181/1181256/produto/1159855557854973d65.jpg",
          },
        ];
        setItems(fetchedItems);
      }, 2000);
    };
    Data();
  }, []);

  const handleItemClick = (item) => {
    setSelectedItem(item);
  };

  return (
    <div>
      <div className="products">
        {items.map((item, index) => (
          <Item key={index} item={item} onClick={handleItemClick} />
        ))}
      </div>
      {selectedItem && <ItemDetail item={selectedItem} />}
    </div>
  );
};

export default ItemList;