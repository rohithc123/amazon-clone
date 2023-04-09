import React from "react";
import "../styles/Checkoutproduct.css";

function Checkoutproduct({ id, title, price, image, rating }) {
  return (
    <div className="checkoutproduct">
      <img
        className="checkout-product-image"
        src={image}
        alt="Image not loading"
      />
      <div className="checkout-product-info">
        <p className="checkout-product-title">{title}</p>
        <p className="checkout-product-price">
          <small>₹</small>
          <strong>{price}</strong>
        </p>
        <div className="checkout-product-rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p>🌟</p>
            ))}
        </div>
        <button>Remove from basket</button>
      </div>
    </div>
  );
}

export default Checkoutproduct;
