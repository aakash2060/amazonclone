const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")(
    "sk_test_51Poq6rGAXQ1J1vl7htXAQGjeRPvkCXHRYlcP8YTaPg9dhqoaTzOullX765paAUyyKrtoik9Nt2Qzd0lN47fe3TEx00VDiMJ0jR",
);

// API

// App config
const app = express();

// Middlewares
app.use(cors({origin: true}));
app.use(express.json());

// API routes
app.post("/payments/create", async (request, response) => {
  const total = request.query.total;

  console.log("Payment Request Recieved Boom!!", total);

  const paymentIntent = await stripe.paymentIntents.create({
    amount: total,
    currency: "usd",
  });
  response.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});

// Listen command
exports.api = functions.https.onRequest(app); // Helps to run the app on backend
// http://127.0.0.1:5001/clone-4cdb2/us-central1/api
