import React from "react";
import { useCart } from "../contexts/CartProvider";
import CartItem from "./CartItem";

function Cart({ setIsModalOpen }) {
  const { cart } = useCart();
  //simple
  // let totalAmt = 0;
  // for (let item of cart) {
  //   totalAmt = totalAmt + item.price * item.quantity;
  // }

  //with reduce method
  const totalAmt = cart.reduce((totalAmount, item) => {
    return totalAmount + item.price * item.quantity;
  }, 0);
  if (cart.length === 0) {
    return setIsModalOpen(false);
  }
  return (
    <>
      <div>
        {cart.map((cartItem) => (
          <CartItem key={cartItem.id} {...cartItem} />
        ))}
      </div>
      <h1>Total Amount = {totalAmt}</h1>
    </>
  );
}

export default Cart;
