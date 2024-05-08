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
              <span className={styles.number}>{10}</span>
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
