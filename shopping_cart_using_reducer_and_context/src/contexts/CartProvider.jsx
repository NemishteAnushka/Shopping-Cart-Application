import { createContext, useContext, useReducer } from "react";
const CartContext = createContext();
function cartReducer(cart, action) {
  console.log("dispatch called", action);
  if (action.type === "ADD_ITEM") {
    return [...cart, action.payload];
  }

  return cart;
}
function CartProvider({ children }) {
  const [cart, dispatch] = useReducer(cartReducer, []);
  //function to handle new cart item
  const handleNewCartItem = (newCartItem) => {
    dispatch({
      type: "ADD_ITEM",
      payload: newCartItem,
    });
  };
  return (
    <CartContext.Provider value={{ cart, handleNewCartItem }}>
      {children}
    </CartContext.Provider>
  );
}

//helper function with which we do not have to import useContext and cartContext everytime
export function useCart() {
  return useContext(CartContext);
}

export default CartProvider;
