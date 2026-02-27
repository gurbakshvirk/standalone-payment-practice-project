import { createContext, useEffect, useState } from "react";

export const CartContext = createContext();
export const CartProvider = ({ children }) => {

// read from localStorage first



  const [cart, setCart] = useState(() => {
    const storedCart = localStorage.getItem("cart");
    return storedCart ? JSON.parse(storedCart) 
    : [];
  });

    useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  // const [cart, setCart] = useState([]);
  const addToCart = (food) => {
    setCart((oldCart) => {
      const existing = oldCart.find((item) => item.id === food.id);

      if (existing) {
        return oldCart.map((item) =>
          item.id === food.id ? { ...item, qty: item.qty + 1 } : item
        );
      }

      return [...oldCart, { ...food, qty: 1 }];
    }
  );
  };

    const clearCart = () => setCart([]);


function increaseQty(id) {
  setCart((oldCart) =>
    oldCart.map((item) =>
      item.id === id ? { ...item, qty: item.qty + 1 } : item
    )
  );
}

function decreaseQty(id) {
  setCart((oldCart) =>
    oldCart
      .map((item) =>
        item.id === id ? { ...item, qty: item.qty - 1 } : item
      )
      .filter((item) => item.qty > 0) 
  );
}
function removeItem(id) {
  setCart((oldCart) =>
    oldCart.filter((item) => item.id !== id)
  );
}

console.log(cart)
  return (
    <CartContext.Provider value={{ cart , addToCart , increaseQty,removeItem, decreaseQty, clearCart }}>
      {children}
    </CartContext.Provider>
  );
};