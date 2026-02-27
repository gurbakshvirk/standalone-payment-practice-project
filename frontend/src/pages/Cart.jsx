import {CartContext} from "../context/Cartcontext";
import { useContext } from "react"

import { loadStripe } from "@stripe/stripe-js";

const stripePromise = loadStripe("pk_test_51SlngECxuOlUCeZIXx3aKUOw8G8mCWF4CzCewoXpJMGBbjovWqIqB4NgS9CcVWPNnCDPFzRkfpHeNJNCGhxd3ISR001uoolqPU"); // replace with your Stripe key


const Cart = () => {
  const {cart , addToCart ,removeItem, increaseQty, decreaseQty, clearCart } = useContext(CartContext)


  const total = cart.reduce((sum, item) => sum + item.price * item.qty, 0);

  if (cart.length === 0) {
    return <h2>Your Cart is Empty</h2>;
  }

  const handleCheckout = async () => {
  try {
    // Call backend to create Stripe checkout session
    const response = await fetch("http://localhost:5000/api/payment/create-checkout-session", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ cart }),
    });
    const data = await response.json();
console.log(data);

    // Redirect to Stripe Checkout
    window.location.href = data.url;
    // clearCart()
  } catch (err) {
    console.error("Stripe checkout error:", err);
  }
};
  return (
    <div>
        <h2>cart page</h2>

      {cart.map((item)=>(
        <div className='card'>
        <h5>No.{item.id}</h5>
        <h1>{item.name}</h1>
        <p>Rs: {item.price}</p>
         <button onClick={() => increaseQty(item.id)}>+</button>
            <p>Qty: {item.qty}</p>
          <button onClick={() => decreaseQty(item.id)}>-</button>
          <button onClick={() => removeItem(item.id)}>Remove</button>
          <p>Item total{item.qty * item.price}</p>

        </div>
    ))}
    
      <h2>Total: ₹{total}</h2>
    <button onClick={handleCheckout} disabled={cart.length === 0}>
  Checkout
</button>


      <button onClick={() => clearCart()}>Clear Cart</button>
    </div>
  )
}

export default Cart

