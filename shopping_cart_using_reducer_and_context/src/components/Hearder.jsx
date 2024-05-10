import React, { useEffect, useState } from "react";
import Modal from "./UI/Modal";
import Cart from "./Cart";
import { useCart } from "../contexts/CartProvider";
import styles from "./Header.module.css";
import Container from "./UI/Container";
import { FaShoppingCart } from "react-icons/fa";
function Hearder() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { cart } = useCart();

  //acc = 0 item.quantity = 1 => 1
  //acc = 1 item.quantity = 1 => 2
  //acc = 2 item.quantity = 1 => 3
  //like this it will work out
  const totalQuantity = cart.reduce((acc, item) => {
    return acc + item.quantity;
  }, 0);
  const handleModalShow = () => {
    if (cart.length === 0) {
      alert("card is empty please add items then open cart");
    } else {
      setIsModalOpen(true);
    }
  };
  const handleModalClose = () => {
    setIsModalOpen(false);
  };
  useEffect(() => {
    if (isModalOpen) {
      document.documentElement.style.overflowY = "hidden";
    } else {
      document.documentElement.style.overflowY = "scroll";
    }
  }, [isModalOpen]);
  return (
    <header className={styles.header}>
      <Container>
        <nav className={styles.nav}>
          <h1>ARC Shop</h1>
          <button className={styles.showCartButton} onClick={handleModalShow}>
            <span className={styles.cartIconAndNumber}>
              <FaShoppingCart />
              {totalQuantity > 0 && (
                <span className={styles.number}>{totalQuantity}</span>
              )}
            </span>
            <span>Cart</span>
          </button>
        </nav>
      </Container>
      {isModalOpen && (
        <Modal handleModalClose={handleModalClose}>
          <Cart setIsModalOpen={setIsModalOpen} />
        </Modal>
      )}
    </header>
  );
}

export default Hearder;
