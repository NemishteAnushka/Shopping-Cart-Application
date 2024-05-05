import React from "react";
import Product from "./Product";
import { items } from "../data/items";

function Products() {
  return (
    <div>
      {items.map((product) => (
        <Product {...product} key={product.id} />
      ))}
    </div>
  );
}

export default Products;
