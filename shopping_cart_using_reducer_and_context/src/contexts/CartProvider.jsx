import { createContext, useContext, useReducer } from "react";
const CartContext = createContext();
function cartReducer(cart, action) {
  if (action.type === "ADD_ITEM") {
    return [...cart, action.payload];
  }
  if (action.type === "INCREASE_QTY") {
    return cart.map((item) => {
      if (item.id === action.payload) {
        return { ...item, quantity: item.quantity + 1 };
      } else {
        return item;
      }
    });
  }
  if (action.type === "DECREASE_QTY") {
    return cart.map((item) => {
      if (item.id === action.payload) {
        return { ...item, quantity: item.quantity - 1 };
      } else {
        return item;
      }
    });
  }

  if (action.type === "REMOVE_ITEM") {
    return cart.filter((item) => item.id !== action.payload);
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
  const handleIncreaseQty = (id) => {
    console.log(id);
    dispatch({
      type: "INCREASE_QTY",
      payload: id,
    });
  };

  const handleDecreaseQty = (id) => {
    console.log(id);
    dispatch({
      type: "DECREASE_QTY",
      payload: id,
    });
  };

  const removeItem = (id) => {
    console.log("remove", id);
    dispatch({
      type: "REMOVE_ITEM",
      payload: id,
    });
  };
  return (
    <CartContext.Provider
      value={{
        cart,
        handleNewCartItem,
        handleIncreaseQty,
        handleDecreaseQty,
        removeItem,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

//helper function with which we do not have to import useContext and cartContext everytime
export function useCart() {
  return useContext(CartContext);
}

export default CartProvider;
