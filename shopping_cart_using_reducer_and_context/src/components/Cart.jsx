import React from "react";
import { useCart } from "../contexts/CartProvider";
import CartItem from "./CartItem";
import styles from "./Cart.module.css";
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
    <div className={styles.cart}>
      <h2 className={styles.cartHeading}>Shopping Cart</h2>
      <div>
        {cart.map((cartItem) => (
          <CartItem key={cartItem.id} {...cartItem} />
        ))}
      </div>
      <h1>Total Amount : &#8377;{totalAmt}</h1>
    </div>
  );
}

export default Cart;
