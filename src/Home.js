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
            id="1"
            title="The lean startup"
            price={29.99}
            image="https://m.media-amazon.com/images/I/41Ag4WE7uyL._AC_UY218_.jpg"
            rating={5}
          />
          <Product
            id="2"
            title="Zero to One"
            price={16.99}
            image="https://m.media-amazon.com/images/I/51zGCdRQXOL._AC_UY218_.jpg"
            rating={4}
          />
        </div>
        <div className="home__row">
          <Product
            id="3"
            title="The Hitchhiker's Guide to the Galaxy"
            price={13.99}
            image="https://m.media-amazon.com/images/I/81j4LPfjVWL._AC_UY218_.jpg"
            rating={5}
          />
          <Product
            id="4"
            title="Rich Dad, Poor Dad"
            price={1.99}
            image="https://m.media-amazon.com/images/I/81BE7eeKzAL._AC_UY218_.jpg"
            rating={1}
          />
          <Product
            id="5"
            title="The Da Vinci Code"
            price={10.99}
            image="https://m.media-amazon.com/images/I/91InVm4TEgL._AC_UY218_.jpg"
            rating={4}
          />
        </div>
        <div className="home__row">
          <Product
            id="6"
            title="Harry Potter and the Sorcerer's Stone"
            price={19.99}
            image="https://m.media-amazon.com/images/I/81Lf94u1d+L._AC_UL320_.jpg"
            rating={3}
          />
          <Product
            id="7"
            title="Harry Potter and the Sorcerer's Stone"
            price={19.99}
            image="https://m.media-amazon.com/images/I/81Lf94u1d+L._AC_UL320_.jpg"
            rating={3}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
