import React, { useEffect } from "react";
import { useStateValue } from "./StateProvider";
import { useState } from "react";
import CheckoutProduct from "./CheckoutProduct";
import { Link } from "react-router-dom";
import "./Payment.css";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import CurrencyFormat from "react-currency-format";
import { getCartTotal } from "./reducer";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";

function Payment() {
  const [{ user, cart }, dispatch] = useStateValue();
  // const stripe = useStripe();
  // const elements = useElements();
  // const navigate = useNavigate();
  // const [error, setError] = useState(null);
  // const [disabled, setDisabled] = useState(true);
  // const [succeeded, setSucceeded] = useState(false);
  // const [processing, setProcessing] = useState("");
  // const [clientSecret, setClientSecret] = useState(true);

  // useEffect(() => {
  //   const getClientSecret = async () => {
  //     const response = await axios({
  //       method: "post",
  //       url: `/payments/create?total=${getCartTotal(cart) * 100}`,
  //     });
  //     setClientSecret(response.data.clientSecret);
  //   };
  //   getClientSecret();
  // }, [cart]);
  // console.log("The secret is >>", clientSecret);

  const handleSubmit = async (e) => {
    e.preventDefault();

  //   if (!clientSecret) {
  //     setError("Payment processing failed: Invalid client secret.");
  //     return;
  //   }

  //   setProcessing(true);

  //   const payload = await stripe
  //     .confirmCardPayment(clientSecret, {
  //       payment_method: {
  //         card: elements.getElement(CardElement),
  //       },
  //     })
  //     .then(({ paymentIntent }) => {
  //       setSucceeded(true);
  //       setError(null);
  //       setProcessing(false);
  //       navigate("/orders", { replace: true });
  //     })
  //     .catch((error) => {
  //       setError(`Payment failed: ${error.message}`);
  //       setProcessing(false);
  //     });
  };

  const handleChange = (e) => {
    // setDisabled(e.empty);
    // setError(e.error ? e.error.message : "");
  };

  return (
    <div className="payment">
      <div className="payment__container">
        <h1>
          Checkout (<Link to="/checkout">{cart?.length} items</Link>)
        </h1>
        <div className="payment__section">
          <div className="payment__title">
            <h3>Delivery Address</h3>
          </div>
          <div className="payment__address">
            <p>{user?.email}</p>
            <p>123 Hooks Drive</p>
            <p>Los Angeles, CA</p>
          </div>
        </div>
        <div className="payment__section">
          <div className="payment__title">
            <h3>Review items and delivery</h3>
          </div>
          <div className="payment__items">
            {cart.map((item) => (
              <CheckoutProduct
                id={item.id}
                title={item.title}
                image={item.image}
                price={item.price}
                rating={item.rating}
              />
            ))}
          </div>
        </div>
        <div className="payment__section">
          <div className="payment__title">
            <h3>Payment Method</h3>
          </div>
          <div className="payment__details">
            <form onSubmit={handleSubmit}>
              <CardElement onChange={handleChange} />
              <div className="payment__priceContainer">
                <CurrencyFormat
                  renderText={(value) => <h3>Order Total: {value}</h3>}
                  decimalScale={2}
                  value={getCartTotal(cart)}
                  displayType={"text"}
                  thousandSeperator={true}
                  prefix={"$"}
                />
                <button>Buy Now</button>
                {/* <button disabled={processing || disabled || succeeded}>
                  <span>{processing ? <p>Processing </p> : "Buy Now"}</span>
                </button> */}
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Payment;
