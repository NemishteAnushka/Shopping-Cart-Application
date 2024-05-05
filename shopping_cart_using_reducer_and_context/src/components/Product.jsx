import React from "react";
import { useCart } from "../contexts/CartProvider";

function Product({ id, img, title, price }) {
  const { handleNewCartItem } = useCart();
  const handleAdd = () => {
    const newCartItem = {
      id: id,
      img: img,
      title: title,
      price: price,
      quantity: 1,
    };
    handleNewCartItem(newCartItem);
  };
  return (
    <div
      style={{
        margin: "1rem",
        padding: "1rem",
        border: "1px solid black",
      }}
    >
      <p>ID : {id}</p>
      <img src={img} alt={title} height={200} />
      <p>Title : {title}</p>
      <p>Price : {price}</p>
      <button onClick={handleAdd}>Add To Cart</button>
    </div>
  );
}

export default Product;
