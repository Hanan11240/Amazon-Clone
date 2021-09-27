
const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")('yoursecretkey')
// API
 

// App config
const app = express();


// Middlewares
app.use(cors({ origin: true}));
app.use(express.json());

// Api routes

app.get('/', (request,response) => response.status(200).send('Asalamu Alikum'))

app.post('/payments/create', async (request , response)=> {
  const total = request.query.total;

  console.log('Payment Request Boom!!! for this amount>>>', total)
  const paymentIntent = await stripe.paymentIntents.create({
    amount: total, //subunits of the currency
    currency: "inr",
  });
// ok - created 
  response.status(201).send({
    clientSecret: paymentIntent.client_secret,
  })

})

// listen
exports.api = functions.https.onRequest(app)

// http://localhost:5001/clone-76202/us-central1/api
