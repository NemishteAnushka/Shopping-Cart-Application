import Products from "./components/Products";
import CartProvider from "./contexts/CartProvider";

function App() {
  return (
    <CartProvider>
      <Products />
    </CartProvider>
  );
}

export default App;
