import React from "react";
import "./Product.css";

function Product({title, image, price, rating}) {
  return (
    <div className="product">
      <div className="product__info">
        <p>{title}</p>
        <p className="product__price">
          <small>$</small>
          <strong>19.99</strong>
        </p>
        <div className="product__rating">
            {Array(rating)
            .fill()
            .map((_, i) => (
          <p>⭐</p>
            ))}
        </div>
      </div>
      <img
        src="https://m.media-amazon.com/images/I/41Ag4WE7uyL._AC_UY218_.jpg"
        alt="book image"
      />
      <button>Add to Cart</button>
    </div>
  );
}

export default Product;
