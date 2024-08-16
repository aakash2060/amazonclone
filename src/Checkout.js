import React from "react";
import "./Checkout.css";
import Subtotal from "./Subtotal.js";
import { useStateValue } from "./StateProvider.js";
import CheckoutProduct from "./CheckoutProduct.js";
import "./CheckoutProduct.css";

function Checkout() {
  const [{ cart }, dispatch] = useStateValue();
  return (
    <div className="checkout">
      <div className="checkout__left">
        <img
          src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
          alt=""
          className="chekout__ad"
        />

        <div>
          <h2 className="checkout__title">Your shopping Cart</h2>
          {cart.map((item) => (
            <CheckoutProduct
              id={item.id}
              title={item.title}
              image={item.image}
              price={item.price}
              rating={item.rating}
            />
          ))}
          {/* Checkout Product */}
          {/* Checkout Product */}
          {/* Checkout Product */}
          {/* Checkout Product */}
        </div>
      </div>
      <div className="chekcout__right">
        <Subtotal />
      </div>
    </div>
  );
}

export default Checkout;
