import React from "react";
import "./Home.css";
import Product from "./Product";
function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://m.media-amazon.com/images/I/41o3odPQPVL._SX1500_.jpg"
          alt=""
        />
        <div className="home__row">
          <Product
            title="The lean startup"
            price="29.99"
            image="https://m.media-amazon.com/images/I/41Ag4WE7uyL._AC_UY218_.jpg"
            rating={5}
          />
          <Product />
        </div>
        <div className="home__row">
          <Product />
          <Product />
          <Product />
        </div>
        <div className="home__row">
          {" "}
          <Product />
        </div>
      </div>
    </div>
  );
}

export default Home;
