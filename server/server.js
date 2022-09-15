const express = require ('express');
const app = express();
const path = require("path");
const cors = require('cors');

const corsOptions ={
  origin:'*', 
  credentials:true,
  optionSuccessStatus:200,
  exposedHeaders: ["X-Coins", "X-Inventory"],
}

app.use(cors(corsOptions));

const vendingRouter = require('./routes/vendingRouter.js');

// SERVER WILL LISTEN ON PORT 3000
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(require("body-parser").json());


app.use(express.static("public"));

// USE ROUTER ENDPOINTS
app.use('/', vendingRouter);

// INDIVIDUAL ERROR HANDLER
app.use((req, res) =>
  res.status(404).send("This is not the correct page you're looking for...")
);

// GLOBAL ERROR HANDLER
app.use((err, req, res, next) => {
  const defaultError = {
    log: "Express error handler caught unknown middleware error",
    status: 400,
    message: "Global message error",
  };
  const errorObj = Object.assign(defaultError, err);
  return res.status(errorObj.status).json(errorObj.message);
});

// MAKE SURE SERVER IS LISTENING ON THE CORRECT PORT
app.listen(PORT, () => {
    console.log (`Server is listening on Port: ${PORT}`);
  });

