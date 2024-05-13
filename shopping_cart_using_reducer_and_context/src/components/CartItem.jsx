import React from "react";
import { useCart } from "../contexts/CartProvider";
import styles from "./CartItem.module.css";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import { ImCross } from "react-icons/im";
function CartItem({ id, img, price, quantity, title }) {
  const { handleIncreaseQty, handleDecreaseQty, removeItem } = useCart();
  return (
    <div className={styles.cartItem}>
      {/* left */}
      <div className={styles.imgAndTitle}>
        <div className={styles.imgContent}>
          <img src={img} alt={title} className={styles.cartImg} />
          <h3>{title}</h3>
        </div>
      </div>
      {/* right */}
      <div className={styles.otherControls}>
        <div className={styles.qtyInput}>
          <button
            onClick={() => {
              if (quantity <= 1) {
                return;
              }
              handleDecreaseQty(id);
            }}
          >
            <AiOutlineMinus />
          </button>
          <span className={styles.quantity}>{quantity}</span>
          <button onClick={() => handleIncreaseQty(id)}>
            <AiOutlinePlus />
          </button>
        </div>
        <p> &#8377; {price * quantity}</p>
        <button onClick={() => removeItem(id)} className={styles.removeItemBtn}>
          <ImCross />
        </button>
      </div>
      {/* old */}
      {/* <p>id : {id}</p>
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
      <button onClick={() => removeItem(id)}>remove item</button> */}
    </div>
  );
}

export default CartItem;
