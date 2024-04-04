import React, { useState, useEffect } from "react";
import "./ItemDetail.css";
import ItemCount from '../ItemCount/ItemCount'

const ItemDetail = ({ item }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const delay = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(delay);
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="detail">
      <div className="detail-picture">
        <img src={item.pictureUrl} alt={item.title} />
        
      </div>
      <div className="detail-info">
        <h2>{item.title}</h2>
        <p>ID: {item.id}</p>
        <p>R$ {item.price}</p>
        <ItemCount stock={item.stock}/>
      </div>
    </div>
  );
};

export default ItemDetail;
