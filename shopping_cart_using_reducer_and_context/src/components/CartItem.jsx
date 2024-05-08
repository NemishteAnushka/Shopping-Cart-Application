import React from "react";
import { useCart } from "../contexts/CartProvider";

function CartItem({ id, img, price, quantity, title }) {
  const { handleIncreaseQty, handleDecreaseQty, removeItem } = useCart();
  return (
    <div
      style={{
        margin: "1rem",
        padding: "1rem",
        border: "1px solid black",
      }}
    >
      <p>id : {id}</p>
      <p>Title : {title}</p>
      <p>Price: {price * quantity}</p>
      <p>Quantity : {quantity}</p>
      <button onClick={() => handleIncreaseQty(id)}>Increase qty</button>
      <button
        onClick={() => {
          if (quantity <= 1) {
            return;
          }
          handleDecreaseQty(id);
        }}
      >
        Decrease qty
      </button>
      <button onClick={() => removeItem(id)}>remove item</button>
    </div>
  );
}

export default CartItem;
