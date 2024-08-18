import React, { useEffect } from "react";
import "./App.css";
import Header from "./Header.js";
import Home from "./Home.js";
import Checkout from "./Checkout.js";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; // Use Routes instead of Switch
import Login from "./Login.js";
import { auth } from "./firebase.js";
import { useStateValue } from "./StateProvider.js";
import Footer from "./Footer.js";
import "bootstrap/dist/css/bootstrap.min.css";
import Payment from "./Payment.js";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

const promise = loadStripe(
  "pk_test_51Poq6rGAXQ1J1vl7UUJ3VbJXdamA3VsWav0REb21LhEAqkq7GNqbA24txQ2qMpIrw8fJSQiDYkFE65OauojXBAQK00qusbE9jr"
);

function App() {
  const [{}, dispatch] = useStateValue();

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      console.log("THE USER IS >>>", authUser);
      if (authUser) {
        dispatch({
          //the user is logged in
          type: "SET_USER",
          user: authUser,
        });
      } else {
        dispatch({
          // the use is logged out
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);
  return (
    <Router>
      <div className="app">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Header />
                <Home />
                <Footer />
              </>
            }
          />
          <Route
            path="/login"
            element={
              <>
                <Login />
              </>
            }
          />
          <Route
            path="/checkout"
            element={
              <>
                <Header />
                <Checkout />
                <Footer />
              </>
            }
          />
          <Route
            path="/payment"
            element={
              <>
                <Header />  
                <Elements stripe={promise}>
                  <Payment />
                  </Elements>
                <Footer />
              </>
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
