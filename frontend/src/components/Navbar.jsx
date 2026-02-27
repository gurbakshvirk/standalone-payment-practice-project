import { CartContext } from "../context/Cartcontext";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const { cart } = useContext(CartContext);
  const navigate = useNavigate();

  return (
    <div className="navbar">
      <button onClick={() => navigate("/")}>Home</button>
      <button onClick={() => navigate("/cart")}>Cart</button>

      <p>Cart qty: {cart.length}</p>
    </div>
  );
};

export default Navbar;