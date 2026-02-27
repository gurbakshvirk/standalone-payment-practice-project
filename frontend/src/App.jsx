import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Products from "./pages/Products";
import Cart from "./pages/Cart";
// import Checkout from "./pages/Checkout";
import CheckoutSuccess from "./pages/CheckoutSuccess"

const App = () => {
  return (
    <div>
      <Navbar />

      <Routes>
        <Route path="/" element={<Products />} />
        <Route path="/cart" element={<Cart />} />
        {/* <Route path="/checkout" element={<Checkout />} /> */}
<Route path="/checkout-success" element={<CheckoutSuccess />} />

      </Routes>
    </div>
  );
};

export default App;