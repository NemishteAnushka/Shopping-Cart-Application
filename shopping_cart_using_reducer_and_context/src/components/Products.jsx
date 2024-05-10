import React from "react";
import Product from "./Product";
import { items } from "../data/items";
import styles from "./Products.module.css";
import Container from "./UI/Container";
function Products() {
  return (
    <Container>
      <h1>Best of ARC</h1>
      <div className={styles.products}>
        {items.map((product) => (
          <Product {...product} key={product.id} />
        ))}
      </div>
    </Container>
  );
}

export default Products;
