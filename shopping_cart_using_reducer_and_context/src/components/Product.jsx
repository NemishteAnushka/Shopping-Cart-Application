import React from "react";
import { useCart } from "../contexts/CartProvider";
import styles from "./Product.module.css";
function Product({ id, img, title, price }) {
  const { handleNewCartItem, cart } = useCart();
  const handleAdd = () => {
    for (let items of cart) {
      if (items.id === id) {
        alert("Item Already exists in cart");
        return;
      }
    }
    const newCartItem = {
      id: id,
      img: img,
      title: title,
      price: price,
      quantity: 1,
    };
    handleNewCartItem(newCartItem);
    alert("item added!!!");
  };
  return (
    <div className={styles.product}>
      <img src={img} alt={title} className={styles.productImg} />
      <p className={styles.title}>{title}</p>
      <p className={styles.price}> &#8377; {price}</p>
      <button onClick={handleAdd} className={styles.addToCartBtn}>
        Add To Cart
      </button>
    </div>
  );
}

export default Product;
