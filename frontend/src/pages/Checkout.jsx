// import { loadStripe } from "@stripe/stripe-js";

// const stripePromise = loadStripe("pk_test_YourPublishableKey");

// const handlePayment = async () => {
//   const response = await fetch("http://localhost:5000/api/payment/create-checkout-session", {
//     method: "POST",
//     headers: { "Content-Type": "application/json" },
//     body: JSON.stringify({ cart }),
//   });

//   const data = await response.json();
//   const stripe = await stripePromise;
//   await stripe.redirectToCheckout({ sessionId: data.id });
// };