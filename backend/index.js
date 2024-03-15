const express = require("express");
const app = require("express")();
const dotenv = require("dotenv");
const cors = require("cors");
const http = require("http").createServer(app);
const axios = require('axios');

dotenv.config();

const port = process.env.PORT || 5007;

const nigeriaTimeZone = "Africa/Lagos";
process.env.TZ = nigeriaTimeZone;
Intl.DateTimeFormat().resolvedOptions().timeZone;

// parse application/json
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

var allowlist = ["http://localhost:5173", "http://localhost:5174"];
const corsOption = function (req, callback) {
  var corsOptionsDelegate;
  if (allowlist.indexOf(req.header("Origin")) !== -1) {
    corsOptionsDelegate = {
      credentials: true,
      origin: true,
      methods: ["GET", "POST", "DELETE"],
      optionSuccessStatus: 200,
    };
  } else {
    corsOptionsDelegate = { origin: false };
  }
  callback(null, corsOptionsDelegate);
};

app.use(cors(corsOption));

app.get("/", (req, res) => {
  return res.status(404).sendFile(__dirname + "/index.html");
});


app.get('/convert/:fromCurrency/:toCurrency/:amount', async (req, res) => {
    try {
      const { fromCurrency, toCurrency, amount } = req.params;
  
      // Call Transak API to fetch exchange rate
      const exchangeRateResponse = await axios.get(`https://api.transak.com/api/v3/currency-conversion/${fromCurrency}/${toCurrency}`);
  
      // Extract exchange rate from the response
      const exchangeRate = exchangeRateResponse.data.data.exchangeRate;
  
      // Calculate converted amount
      const convertedAmount = amount * exchangeRate;
  
      res.json({
        from: fromCurrency,
        to: toCurrency,
        amount: amount,
        convertedAmount: convertedAmount,
      });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });
  

http.listen(port, () => console.log(`Server started at ${port}`));
