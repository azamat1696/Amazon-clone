const functions = require('firebase-functions');
const express = require("express");
const cors = require("cors");
const { response } = require('express');
const { request } = require('express');
const stripe = require("stripe")('sk_test_51I1dANAhojyQskk76LzeYwJnM1Pz3KjVo4wEsSaFnLLw4D6dUJqQoKK81COYNt7nt2cdyFbS0IHmRZhjTcWQEIbc00EtpAdMR5')


//API


// App config 
const app = express();

// Middlewares
app.use(cors({ origin: true }));
app.use(express.json());

//API routes
app.get('/', (request, response) => response.status(200).send('hello world'))

app.post('/payments/create', async (request, response)=> {

    const total = request.query.total;
    console.log("Paymnet recived>>>>>",total)

    const paymentIntent = await stripe.paymentIntents.create({
        amount: total,
        currency: "usd",
    });

    response.status(201).send({
        clientSecret: paymentIntent.client_secret,
    })
})

// listen command
exports.api = functions.https.onRequest(app)
// example endpoint
//http://localhost:5001/clone31-4e1fc/us-central1/api
