import React from "react";
import Subtotal from "./Subtotal";
import "../styles/checkout.css";

function Checkout() {
  return (
    <div className="checkout">
      <div className="checkout-left">
        <img
          src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
          alt="image not loading"
          className="checkout-ad"
        />
        <div>
          <h2 className="checout-title">Your Shopping Basket</h2>
        </div>
      </div>

      <div className="checkout-right">
        <Subtotal/>
      </div>
    </div>
  );
}

export default Checkout;
