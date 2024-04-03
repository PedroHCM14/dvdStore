import React, { useState, useEffect } from "react";
import "./ItemDetail.css";

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
    <div>
      <h2>{item.title}</h2>
      <p>Stock: {item.stock}</p>
      <p>Price: {item.price}</p>
      <img src={item.pictureUrl} alt={item.title} />
    </div>
  );
};

export default ItemDetail;
