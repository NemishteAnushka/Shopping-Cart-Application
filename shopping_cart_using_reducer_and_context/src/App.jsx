import Hearder from "./components/Hearder";
import Products from "./components/Products";
import CartProvider from "./contexts/CartProvider";

function App() {
  return (
    <CartProvider>
      {/* Header */}
      <Hearder />
      <Products />
    </CartProvider>
  );
}

export default App;
